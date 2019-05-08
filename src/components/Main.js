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
          <img src="./logo.png" width="550" alt='Smart Math' />
        </div>
        <Route exact path="/" component={About} />
        <Route exact path="/practicing" component={Practicing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    );
  }
}

export default Main;
