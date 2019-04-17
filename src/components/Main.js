import React, { Component } from "react";
import { Route } from "react-router-dom";

import About from "./About";
import Practicing from "./Practicing";
import Profile from "./Profile";
import Contacts from "./Contacts";
import Navigation from "./Navigation";

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="nav" id="nav" role="navigation">
          <Navigation />
        </nav>
        <div className="logo">
          <img src="./logo.png" width="550" />
        </div>
        <Route exact path="/" component={About} />
        <Route path="/practicing" component={Practicing} />
        <Route path="/profile" component={Profile} />
        <Route path="/contacts" component={Contacts} />
      </div>
    );
  }
}

export default Main;
