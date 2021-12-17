import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SpringBootData from "./components/SpringBootData";
import React, { useEffect, useState } from 'react';
// import EmpData from "./components/EmpData";
import Header from "./components/Header";

import Home from './components/Home';
import Login from "./components/Login";
import Logout from './components/Logout';
import Page404 from './components/Page404';
import Register from "./components/Register";
import FarmerData from './components/Farmercontroller/FarmerData';

const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {    // login statu && id -1
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                {/* <Route exact path="/" loginStatus > <Home /> </Route> */}
                                {/* <Route path="/home" loginStatus> <Home /> </Route> */}
                                {/* <Route path="/hello"> <Hello /> </Route> */}
                                {/* <Route path="/spring"> <SpringBootData /> </Route> */}
                                <Route path="/farm"> <FarmerData /> </Route>
                                {/* <Route path="/logout"> <Logout /> </Route> */}
                                {/* <Route path="/*"> <Page404 /> </Route> */}
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Switch>
                                {/* <Route exact path="/" loginStatus > <Home /> </Route> */}
                                {/* <Route path="/home" loginStatus> <Home /> </Route> */}
                                {/* <Route path="/register"> <Register /> </Route> */}
                                {/* <Route path="/login"> <Login /> </Route> */}
                                {/* <Route path="/*"> <Page404 /> </Route> */}
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}



export default Routes;