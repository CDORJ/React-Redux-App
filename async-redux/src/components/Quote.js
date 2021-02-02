import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  background-color: #cccccc;
`;

const StyledH5 = styled.h5`
  font-family: "Catamaran", Sans-Serif;
  font-size: 13px;
`;
const StyledH3 = styled.h3`
  font-family: "Lato", Sans-Serif;
  font-size: 20px;
`;
const StyledH4 = styled.h4`
  font-family: "Catamaran", Sans-Serif;
  font-size: 16px;
`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
width: 85%;
margin: 20px auto;
// border: 1px solid red;
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
                <StyledH5>Quote Genre: {item.quoteGenre}</StyledH5>
                <StyledH3>{item.quoteText}</StyledH3>
                <StyledH4>{item.quoteAuthor}</StyledH4>
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
