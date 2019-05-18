import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeMode } from '../../../actions/changeMode';
import { SETTINGS } from "../../../const/modes";

const style = {
  width: '200px',
  height: '50px',
  borderRadius: '15px',
  position: 'relative',
  fontWeight: 'bold',
  fontSize: '25px'
};

class StartPracticingButton extends Component {
  render(){
    return <Button variant="danger" onClick={this.props.changeMode} style={style}>{this.props.mode === SETTINGS ? 'GO!' : 'STOP'}</Button>;
  }
}

StartPracticingButton.propTypes = {
  mode: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
  mode: state.mode
});

const mapDispatchToProps = dispatch => ({
  changeMode: () => dispatch(changeMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPracticingButton);