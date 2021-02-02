import React from "react";
import { connect } from "react-redux";

const Quote = (props) => {
  console.log("props.quote from Quote.js", props);
  return (
    <div>
      {props.quote.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.quoteText}</h4>
            <p>{item.quoteAuthor}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.QR.isLoading,
    quote: state.QR.quote,
    error: state.QR.error,
  };
};

export default connect(mapStateToProps, {})(Quote);
