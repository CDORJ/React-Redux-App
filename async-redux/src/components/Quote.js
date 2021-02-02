import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  background-color: #cccccc;
`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
width: 65%;
margin: 0 auto;
border: 1px solid red;
`;

const Quote = (props) => {
  console.log("props.quote from Quote.js", props);
  return (
    <div>
      {props.isLoading ? (
        <Loader type="ThreeDots" color="#c1c1c1" height={40} width={40} />
      ) : props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : (
        <CardContainer>
          {props.quote.map((item) => {
            return (
              <StyledDiv key={item.id}>
                <h5>Quote Genre: {item.quoteGenre}</h5>
                <h3>{item.quoteText}</h3>
                <h4>{item.quoteAuthor}</h4>
              </StyledDiv>
            );
          })}
        </CardContainer>
      )}
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
