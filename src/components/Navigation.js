import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/practicing" activeClassName="active">
            Practicing
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
