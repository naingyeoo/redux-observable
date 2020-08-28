import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCounter } from "../actions/index";

const counterStep = 1;

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>
          <button type="button" onClick={this.props.decrement}>
            -
          </button>
          {this.props.counter}
          <button type="button" onClick={this.props.increment}>
            +
          </button>
        </h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(updateCounter(counterStep));
    },
    decrement: () => {
      dispatch(updateCounter(-counterStep));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
