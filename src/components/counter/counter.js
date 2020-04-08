import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    InitialValue: 0,
  };
  static propTypes = {
    step: PropTypes.number,
    InitialValue: PropTypes.number,
  };
  state = { value: this.props.InitialValue };

  //   constructor(props) {
  //     super(props);
  //     this.state = { value: props.InitialValue };
  //   }
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <Controls
          step={step}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        ></Controls>
      </div>
    );
  }
}
