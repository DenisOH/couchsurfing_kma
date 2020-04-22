import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./containers/Main";
import Login from "./containers/Login";
import Register from "./containers/Register";
import About from "./containers/About";
import Listings from "./containers/Listings";
import DetailedListing from "./containers/DetailedListing";
import Profile from "./containers/Profile";
import AddListing from "./containers/AddListing";

import './App.css';

const authViews = [
  "#/listings",
  "#/profiles",
  "#/add-listing",
];

const isAuthed = (loc) => {
  for (const view of authViews) {
    if (loc.startsWith(view)) {
      return true;
    }
  }
  return false;
};

function App() {
  const history = createBrowserHistory();
  const [isAuthenticated, setIsAuthenticated] = React.useState(isAuthed(window.location.hash));

  history.listen( location =>  {
    if (isAuthed(location.hash)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <Router history={history} basename="/">
      <div className="content">
        <Navbar isAuthenticated={isAuthenticated} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/listings/:id">
            <DetailedListing />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/add-listing">
            <AddListing />
          </Route>
          <Route path="/profiles/:id">
            <Profile />
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
