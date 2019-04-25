import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PracticingModuleSettingsContainer from "./practicingSettings/PracticingModuleSettingsContainer.js";

import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION
} from "../const/practicingTypes.js";
import AdditionSettings from "./practicingSettings/AdditionSettings.js";

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
              <PracticingModuleSettingsContainer moduleName={ADDITION}>
                <AdditionSettings />
              </PracticingModuleSettingsContainer>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettingsContainer moduleName={SUBTRACTION}>
                <span>111111111111111</span>
              </PracticingModuleSettingsContainer>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettingsContainer moduleName={MULTIPLICATION}>
                <img
                  id="loadingImage"
                  src="https://theartofeducation.edu/content/themes/artofed/img/loader.gif"
                  width="100"
                />
              </PracticingModuleSettingsContainer>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettingsContainer moduleName={DIVISION} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Practicing;
