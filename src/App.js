import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';

import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/">
            <p>Main</p>
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/register">
            <p>Register</p>
          </Route>
          <Route path="/login">
            <p>Login</p>
          </Route>
        </AnimatedSwitch>
      </Router>
    </>
  );
}

export default App;
