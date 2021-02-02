import React from "react";
import { connect } from "react-redux";

const Quote = ({ isLoading, quote, error }) => {
  console.log("props.quote from Quote.js", quote);
  return (
    <>
      {quote.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.quoteText}</h4>
            <p>{item.quoteAuthor}</p>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Quote);
