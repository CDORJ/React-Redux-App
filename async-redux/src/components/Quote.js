import React from "react";
import { connect } from "react-redux";


const Quote = (props) => {
    return (
        <>
            {/* props.isLoading ? (
                <div>***FETCHING DATA***</div>
            ) : props.error ? (
                    <div style={{ color: 'red' }}>{props.error}</div>
                ) : (
                        props.quote.map((quote) => {
                        return <div>quote.quoteText</div>
                    })
            )
         */}
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
