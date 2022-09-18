import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import store from "./store";

function App() {


    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Roboto", "Droid Sans", "Chilanka"],
            },
        });

    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                {/* Routes here */}
            </Switch>
        </Router>
    );
}

export default App;
