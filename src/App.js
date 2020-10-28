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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
            <Route
              path="/account/register"
              render={(props) => <SignUp {...props} />}
            />
            <Route path="/checkout" exact component={isAuth(Checkout)} />;
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
