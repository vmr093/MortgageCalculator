import React from "react";
import styled from "styled-components";
import { NumericFormat } from "react-number-format";

const InputField = ({ label, name, register, onChange, value, unit, currency, allowDecimal }) => {
  return (
    <FieldContainer>
      <label>{label}</label>
      <InputWrapper>
        {currency && <Prefix>{currency}</Prefix>}
        <StyledInput
          value={value} // ✅ Ensures controlled value
          customInput={NumericFormat}
          thousandSeparator="," // ✅ Adds commas for thousands
          decimalScale={2} // ✅ Always show 2 decimal places
          fixedDecimalScale={true} // ✅ Ensures .00 formatting
          allowNegative={false}
          allowLeadingZeros={true} // ✅ Keeps leading zeros
          prefix={currency ? `${currency} ` : ""} // ✅ Adds the $ symbol
          onValueChange={(values) => onChange(values.value)}
        />
        {unit && <Unit>{unit}</Unit>}
      </InputWrapper>
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  background: white;
`;

const Prefix = styled.span`
  background: #EAF4FA;
  color: #162C41;
  padding: 10px;
  font-weight: bold;
  border-right: 1px solid #ccc;
`;

const StyledInput = styled(NumericFormat)`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
`;

const Unit = styled.span`
  background: #EAF4FA;
  color: #162C41;
  padding: 10px;
  font-weight: bold;
  border-left: 1px solid #ccc;
`;

export default InputField;
