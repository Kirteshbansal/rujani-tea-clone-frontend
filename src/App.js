import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./public/css/App.css";
import Home from "./home/Home";
import Products from "./products/Products";
import CollectionProducts from "./collection/CollectionProducts";
import Product from "./product/Product";
import Checkout from "./checkout/Checkout";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
// import isAuth from "./auth/auth";
import UserProfile from "./userProfile/UserProfile";
import config from "./config/config";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";
import CommonToastContainer from "./components/Common/CommonToastContainer";

const App = (props) => {
    let { isLoggedIn } = useSelector((state) => ({ isLoggedIn: state.user.loginSuccess }));

    return (
        <>
            <Router>
                <ScrollToTop />
                <CommonToastContainer />
                <Switch>
                    <Route
                        path={routes.home}
                        exact={true}
                        render={(props) => <Home {...props} announcementText={config?.announcement} />}
                    />
                    <Route path={routes.products} exact={true} render={(props) => <Products {...props} />} />
                    <Route path={routes.category} exact={true} render={(props) => <CollectionProducts {...props} />} />
                    <Route path={routes.product} exact={true} render={(props) => <Product {...props} />} />
                    <Route
                        path={routes.login}
                        exact={true}
                        exact={true}
                        render={(props) =>
                            isLoggedIn ? (
                                <Redirect to={{ pathname: routes.home, state: { from: props.location } }} />
                            ) : (
                                <LogIn {...props} />
                            )
                        }
                    />
                    <Route
                        path={routes.signup}
                        exact={true}
                        render={(props) => (isLoggedIn ? <Redirect to={routes.home} /> : <SignUp {...props} />)}
                    />
                    <Route path={routes.checkout} exact={true} render={(props) => <Checkout {...props} />} />
                    <Route path={routes.profile} exact={true} render={(props) => <UserProfile {...props} />} />
                    {/* <Route path={routes.checkout} exact={true} component={isAuth(Checkout)} />;
                    <Route path={routes.profile} exact={true} component={isAuth(UserProfile)} />; */}
                </Switch>
            </Router>
        </>
    );
};

export default App;
