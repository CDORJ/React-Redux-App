import React, { useState } from "react";
import { connect } from "react-redux";
import { loadQuote } from "../actions/quoteActions";

const Params = (props) => {
  const [limit, setLimit] = useState(1);

  const handleChange = (e) => {
    setLimit(e.target.value);
  };

  const handleClick = (e) => {
      e.preventDefault();
      props.loadQuote(limit)
  };

  return (
    <div>
      <input value={limit} onChange={handleChange} />
      <button onClick={handleClick}>Qet Your Quotes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(null, { loadQuote })(Params);
