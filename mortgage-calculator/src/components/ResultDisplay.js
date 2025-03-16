import React from "react";
import styled from "styled-components";
import currencyFormatter from "currency-formatter";

const ResultDisplay = ({ results }) => {
  return (
    <ResultContainer>
      <h2>Your results</h2>
      <p>Your monthly repayments</p>
      <Amount>{currencyFormatter.format(results.monthlyPayment, { code: "GBP" })}</Amount>
      <p>Total you'll repay over the term</p>
      <Total>{currencyFormatter.format(results.totalRepayment, { code: "GBP" })}</Total>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  background: #162c41;
  color: white;
  padding: 30px;
  border-radius: 0 12px 12px 0;
  width: 100%;
`;

const Amount = styled.h1`
  color: #F7D800;
  font-size: 32px;
  margin-top: 5px;
`;

const Total = styled.h3`
  color: #BFD3FF;
  font-size: 22px;
`;

export default ResultDisplay;
