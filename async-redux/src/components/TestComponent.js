import React from "react";
import { connect } from "react-redux";

const TestComponent = () => {
  return <div>{"Here's my test Component"}</div>;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  /* whatever action creators are needed */
})(TestComponent);
