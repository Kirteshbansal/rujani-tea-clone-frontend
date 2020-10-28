import React, { Component } from "react";
import { connect } from "react-redux";

import LogIn from "./LogIn";
import { userAuthentication } from "./authSlice";

export default function isAuth(ReceivedComponent) {
  class AuthCheck extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      this.props.userAuthentication();
    }

    render() {
      return <>{this.props.loginSuccess ? <ReceivedComponent /> : <LogIn />}</>;
    }
  }

  const mapStateToProps = (state) => {
    // console.log("auth file", state);
    return {
      user: { ...state.user.user },
      loginSuccess: state.user.loginSuccess,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      userAuthentication: () => dispatch(userAuthentication()),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
}
