import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BaseSettings from "./BaseSettings";
import { ADDITION } from "../../const/practicingTypes";
import { changeMaximumSum } from "../../actions/changeMaximumSum";
import { SETTINGS } from "../../const/modes";

class AdditionSettings extends Component {
  onChangeMaximumSum = e => {
    let newValue = parseInt(e.target.value);
    if (Number.isNaN(newValue)) {
      newValue = 0;
    }
    this.props.changeMaximumSum(newValue);
  };

  render() {
    return (
      <>
        <BaseSettings moduleName={ADDITION}>
          <Form.Group as={Row} style={{ width: "90%", marginTop: "-8px" }}>
            <Form.Label column sm="6" md="8" lg="12">
              Maximum Sum
            </Form.Label>
            <Col sm="4" lg="12">
              <Form.Control
                type="text"
                value={this.props.maximumSum}
                onChange={this.onChangeMaximumSum}
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
  maximumSum: PropTypes.number.isRequired,
  changeMaximumSum: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  let module = state.modules.find(m => m.name === ADDITION); 
  return {
    isEnabled: module.isEnabled,
    maximumSum: module.maximumSum,
    mode: state.mode,
  };
};

const mapDispatchToProps = dispatch => ({
  changeMaximumSum: maximumSum => {
    dispatch(changeMaximumSum(maximumSum));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionSettings);
