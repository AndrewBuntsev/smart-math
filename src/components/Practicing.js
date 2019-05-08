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
import SubtractionSettings from "./practicingSettings/SubtractionSettings.js";
import MultiplicationSettings from "./practicingSettings/MultiplicationSettings.js";
import DivisionSettings from "./practicingSettings/DivisionSettings.js";

class Practicing extends Component {

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
                <SubtractionSettings />
              </PracticingModuleSettingsContainer>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettingsContainer moduleName={MULTIPLICATION}>
                <MultiplicationSettings />
              </PracticingModuleSettingsContainer>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <PracticingModuleSettingsContainer moduleName={DIVISION}>
              <DivisionSettings/>
              </PracticingModuleSettingsContainer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Practicing;
