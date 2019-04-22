import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const buttonStyle = {
  width: "150px",
  marginTop: "20px"
};

const collapseStyle = {
  marginTop: "5px"
};

class PracticingModuleSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { deatailsOpened: false };
  }

  toggleOpened = () => {
    this.setState(prevSate => ({ deatailsOpened: !prevSate.deatailsOpened }));
  };

  render() {
    return (
      <>
        <Button onClick={this.toggleOpened} style={buttonStyle}>
          {this.props.moduleName}
        </Button>
        <Collapse in={this.state.deatailsOpened} style={collapseStyle}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  }
}

PracticingModuleSettings.propTypes = {
  moduleName: PropTypes.string.isRequired
};

export default PracticingModuleSettings;
