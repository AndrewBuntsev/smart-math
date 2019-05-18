import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BaseSettings from "./BaseSettings";
import { SUBTRACTION } from "../../const/practicingTypes";
import { changeMaximumMinuend } from "../../actions/changeMaximumMinuend";
import { SETTINGS } from "../../const/modes";

class SubtractionSettings extends Component {
  onChangeMaximumMinuend = e => {
    let newValue = parseInt(e.target.value);
    if (Number.isNaN(newValue)) {
      newValue = 0;
    }
    this.props.changeMaximumMinuend(newValue);
  };

  render() {
    return (
      <>
        <BaseSettings moduleName={SUBTRACTION}>
          <Form.Group as={Row} style={{ width: "90%", marginTop: "-8px" }}>
            <Form.Label column sm="6" md="8" lg="12">
              Maximum Minuend
            </Form.Label>
            <Col sm="4" lg="12">
              <Form.Control
                type="text"
                value={this.props.maximumMinuend}
                onChange={this.onChangeMaximumMinuend}
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
  maximumMinuend: PropTypes.number.isRequired,
  changeMaximumMinuend: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  let module = state.modules.find(m => m.name === SUBTRACTION); 
  return {
    isEnabled: module.isEnabled,
    maximumMinuend: module.maximumMinuend,
    mode: state.mode,
  };
};

const mapDispatchToProps = dispatch => ({
  changeMaximumMinuend: maximumMinuend => {
    dispatch(changeMaximumMinuend(maximumMinuend));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubtractionSettings);
