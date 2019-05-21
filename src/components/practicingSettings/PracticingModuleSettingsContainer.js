import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { SETTINGS, PRACTICING } from "../../const/modes";

const buttonStyle = {
  width: "80%",
  marginTop: "20px"
};

const collapseStyle = {
  marginTop: "5px"
};

class PracticingModuleSettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { detailsOpened: true, detailsHasBeenCollapsed: false };
  }

  toggleOpened = () => {
    this.setState(prevSate => ({ detailsOpened: !prevSate.detailsOpened }));
  };

  componentDidUpdate(prevProps){
    if (this.props.mode === PRACTICING && !this.state.detailsHasBeenCollapsed){
      this.setState({detailsOpened: false, detailsHasBeenCollapsed: true});
    }
    else if (this.props.mode === SETTINGS && this.state.detailsHasBeenCollapsed){
      this.setState({detailsHasBeenCollapsed: false});
    }
  }

  render() {
    return (
      <>
        <Button
          onClick={this.toggleOpened}
          style={buttonStyle}
          variant={this.props.isEnabled ? "success" : "secondary"}
        >
          {this.props.moduleName}
        </Button>
        <Collapse in={this.state.detailsOpened} style={collapseStyle}>
          <div>{this.props.children}</div>
        </Collapse>
      </>
    );
  }
}

PracticingModuleSettingsContainer.propTypes = {
  moduleName: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf([SETTINGS, PRACTICING]),
};

const mapStateToProps = (state, ownProps) => {
  return {
    isEnabled: state.modules.find(m => m.name === ownProps.moduleName).isEnabled,
    mode: state.mode
  };
};

export default connect(mapStateToProps)(PracticingModuleSettingsContainer);
