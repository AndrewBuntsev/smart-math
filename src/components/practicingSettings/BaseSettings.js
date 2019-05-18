import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { enableModule } from "../../actions/enableModule";
import { changeTotal } from "../../actions/changeTotal";
import { SETTINGS } from "../../const/modes";

class BaseSettings extends Component {
  onChangeEnabled = e => {
    this.props.enableModule(e.target.checked);
  };

  onChangeTotal = e => {
    let newValue = parseInt(e.target.value);
    if (Number.isNaN(newValue)) {
      newValue = 0;
    }
    this.props.changeTotal(newValue);
  };

  render() {
    return (
      <Form>
        <Form.Check
          custom
          type="checkbox"
          id={`BaseSetting_checkbox_enabled_${this.props.moduleName}`}
          label="Enabled"
          style={{ marginTop: "15px" }}
          checked={this.props.isEnabled}
          onChange={this.onChangeEnabled}
          disabled={this.props.isEnabled && this.props.mode === SETTINGS ? "" : "disabled"}
        />
        <Form.Group as={Row} style={{ width: "90%", marginTop: "15px" }}>
          <Form.Label column sm="6" md="8" lg="12">
            Problems Total
          </Form.Label>
          <Col sm="4" lg="12">
            <Form.Control
              type="text"
              value={this.props.problemsTotal}
              onChange={this.onChangeTotal}
              disabled={this.props.isEnabled && this.props.mode === SETTINGS ? "" : "disabled"}
            />
          </Col>
        </Form.Group>
        {this.props.children}
      </Form>
    );
  }
}

BaseSettings.propTypes = {
  moduleName: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  problemsTotal: PropTypes.number.isRequired,
  enableModule: PropTypes.func.isRequired,
  changeTotal: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let module = state.modules.find(m => m.name === ownProps.moduleName);
  return {
    isEnabled: module.isEnabled,
    mode: state.mode,
    problemsTotal: module.problemsTotal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  enableModule: isEnabled => {
    dispatch(enableModule(ownProps.moduleName, isEnabled));
  },
  changeTotal: total => {
    dispatch(changeTotal(ownProps.moduleName, total));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseSettings);
