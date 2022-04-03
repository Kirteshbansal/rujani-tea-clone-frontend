import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { userAuthentication } from "./authSlice";
import SkeletonComp from "../components/Common/SkeletonComp";
import routes from "../routes/routes";

export default function isAuth(ReceivedComponent) {
    class AuthCheck extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
            };
        }

        getToken = () => {
            return localStorage.getItem("token");
        };

        componentDidMount() {
            const token = this.getToken();
            console.log("token :>> ", token);
            if (token) {
                this.props.userAuthentication(token).then((res) => {
                    if (!res.payload.isAuth) {
                        this.props.history.push(routes.login);
                    }
                    this.setState({
                        loading: true,
                    });
                });
            } else {
                this.props.history.push(routes.login);
            }
        }

        render() {
            const { loading } = this.state;
            return (
                <>
                    {!loading ? (
                        // <ReceivedComponent props={this.props} />
                        <p>components</p>
                    ) : (
                        <Flex px="8%" py="3%" backgroundColor="#efefef" justifyContent="center" w="100%">
                            <SkeletonComp />
                        </Flex>
                    )}
                </>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            loginSuccess: state.user.loginSuccess,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            userAuthentication: (token) => dispatch(userAuthentication(token)),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
}
