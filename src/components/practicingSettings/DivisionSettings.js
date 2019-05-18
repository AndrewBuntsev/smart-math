import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BaseSettings from "./BaseSettings";
import { DIVISION } from "../../const/practicingTypes";
import { changeMaximumDivident } from "../../actions/changeMaximumDivident";
import { SETTINGS } from "../../const/modes";

class DivisionSettings extends Component {
  onChangeMaximumDivident = e => {
    let newValue = parseInt(e.target.value);
    if (Number.isNaN(newValue)) {
      newValue = 0;
    }
    this.props.changeMaximumDivident(newValue);
  };

  render() {
    return (
      <>
        <BaseSettings moduleName={DIVISION}>
          <Form.Group as={Row} style={{ width: "90%", marginTop: "-8px" }}>
            <Form.Label column sm="6" md="8" lg="12">
              Maximum Divident
            </Form.Label>
            <Col sm="4" lg="12">
              <Form.Control
                type="text"
                value={this.props.maximumDivident}
                onChange={this.onChangeMaximumDivident}
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
  maximumDivident: PropTypes.number.isRequired,
  changeMaximumDivident: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  let module = state.modules.find(m => m.name === DIVISION); 
  return {
    isEnabled: module.isEnabled,
    maximumDivident: module.maximumDivident,
    mode: state.mode,
  };
};

const mapDispatchToProps = dispatch => ({
  changeMaximumDivident: maximumDivident => {
    dispatch(changeMaximumDivident(maximumDivident));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DivisionSettings);
