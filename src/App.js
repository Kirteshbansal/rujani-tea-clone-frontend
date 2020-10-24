import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Products from "./products/Products";
import CollectionProducts from "./collection/CollectionProducts";

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
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
