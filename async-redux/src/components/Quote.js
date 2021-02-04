import React from "react";
import { connect } from "react-redux";

import Form from "./Form";

const Quote = (props) => {
  return (
    <div>
      <p class="quote">🤮 "{props.quote}" 💩</p>
      <p>
        -- A quote by Donald Trump about <span class="tag">
        {props.tag.length > 0 ? props.tag: 'a mystery for you and me!'}
          </span>
      </p>
      <Form props={props} />
    </div>
  );
};



const mapStateToProps = (state) => ({
  quote: state.quote,
  tag: state.tag,
});

export default connect(mapStateToProps, {})(Quote);
