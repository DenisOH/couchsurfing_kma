import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./containers/Main";
import Login from "./containers/Login";
import Register from "./containers/Register";

import './App.css';

function App() {
  return (
    <Router basename="/">
      <div className="content">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
