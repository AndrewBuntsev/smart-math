import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BaseSettings from "./BaseSettings";
import { MULTIPLICATION } from "../../const/practicingTypes";
import { changeMaximumMultiplier } from "../../actions/changeMaximumMultiplier";
import { SETTINGS } from "../../const/modes";

class MultiplicationSettings extends Component {
  onChangeMaximumMultiplier = e => {
    let newValue = parseInt(e.target.value);
    if (Number.isNaN(newValue)) {
      newValue = 0;
    }
    this.props.changeMaximumMultiplier(newValue);
  };

  render() {
    return (
      <>
        <BaseSettings moduleName={MULTIPLICATION}>
          <Form.Group as={Row} style={{ width: "90%", marginTop: "-8px" }}>
            <Form.Label column sm="6" md="8" lg="12">
              Maximum Multiplier
            </Form.Label>
            <Col sm="4" lg="12">
              <Form.Control
                type="text"
                value={this.props.maximumMultiplier}
                onChange={this.onChangeMaximumMultiplier}
                disabled={this.props.isEnabled && this.props.mode === SETTINGS ? "" : "disabled"}
              />
            </Col>
          </Form.Group>
        </BaseSettings>
      </>
    );
  }
}

BaseSettings.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  maximumMultiplier: PropTypes.number.isRequired,
  changeMaximumMultiplier: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  let module = state.modules.find(m => m.name === MULTIPLICATION); 
  return {
    isEnabled: module.isEnabled,
    maximumMultiplier: module.maximumMultiplier,
    mode: state.mode,
  };
};

const mapDispatchToProps = dispatch => ({
  changeMaximumMultiplier: maximumMultiplier => {
    dispatch(changeMaximumMultiplier(maximumMultiplier));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiplicationSettings);
