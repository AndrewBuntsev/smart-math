import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/practicing">Practicing</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
