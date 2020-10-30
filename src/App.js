import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Products from "./products/Products";
import CollectionProducts from "./collection/CollectionProducts";
import Product from "./product/Product";
import Checkout from "./checkout/Checkout";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import isAuth from "./auth/auth";
import UserProfile from "./userProfile/UserProfile";
// import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { loginSuccess } = this.props;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            />
            <Route
              path="/collection/:id"
              render={(props) => <CollectionProducts {...props} />}
            />
            <Route
              path="/product/:id"
              render={(props) => <Product {...props} />}
            />
            <Route path="/login" render={(props) => <LogIn {...props} />} />
            {/* <Route
              path="/profile"
              render={
                (props) => (
                  {
                  return loginSuccess === true ? (
                  <UserProfile {...props} />
                )
                  ) : (
                    <Redirect to="/login" />
                  );
                }
              }
            /> */}
            {/* <Route path="/checkout">
              {loginSuccess ? <Checkout /> : <Redirect to="/login" />}
            </Route> */}
            <Route
              path="/account/register"
              render={(props) => <SignUp {...props} />}
            />
            <Route path="/checkout" exact component={isAuth(Checkout)} />;
            <Route path="/profile" component={isAuth(UserProfile)} />;
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     loginSuccess: state.user.loginSuccess,
//   };
// };

export default App;
// export default connect(mapStateToProps)(App);
