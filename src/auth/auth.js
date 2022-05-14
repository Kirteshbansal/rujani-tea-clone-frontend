import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Flex, Skeleton } from "@chakra-ui/core";
import { userAuthentication } from "./authSlice";

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
      if (token) {
        this.props.userAuthentication(token).then((res) => {
          if (!res.payload.isAuth) {
            this.props.history.push("/login");
          }
          this.setState({
            loading: true,
          });
        });
      } else {
        this.props.history.push("/login");
      }
    }

    render() {
      const { loading } = this.state;
      return (
        <>
          {loading ? (
            <ReceivedComponent props={this.props} />
          ) : (
            <Flex
              px="8%"
              py="3%"
              backgroundColor="#efefef"
              justifyContent="center"
              w="100%"
              flexDirection="column"
            >
              <Skeleton
                height="20px"
                my="10px"
                colorStart="#f2f2f2"
                colorEnd="#C8C8C8"
              />
              <Skeleton
                height="20px"
                my="10px"
                colorStart="#f2f2f2"
                colorEnd="#C8C8C8"
              />
              <Skeleton
                height="20px"
                my="10px"
                colorStart="#f2f2f2"
                colorEnd="#C8C8C8"
              />
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

  return connect(null, mapDispatchToProps)(AuthCheck);
}
