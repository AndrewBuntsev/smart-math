import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PracticingModuleSettings from "./PracticingModuleSettings";

import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION
} from "../const/practicingType.js";

class Practicing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Practicing</h2>
        <br />
        <div className="container">
          <div className="row" style={{ height: "200px" }}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettings moduleName={ADDITION} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettings moduleName={SUBTRACTION} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettings moduleName={MULTIPLICATION} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettings moduleName={DIVISION} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Practicing;
