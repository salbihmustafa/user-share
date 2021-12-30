import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <div className="container">
      <Router>
        <MainNavigation></MainNavigation>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/places/new" exact component={NewPlace} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
