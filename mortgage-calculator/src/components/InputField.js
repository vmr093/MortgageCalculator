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
          value={value} // ✅ Ensures value is controlled
          customInput={NumericFormat}
          thousandSeparator={true}
          decimalScale={allowDecimal ? 2 : 0} // Allow decimals for interest rate
          fixedDecimalScale={allowDecimal}
          allowNegative={false}
          prefix={currency ? `${currency} ` : ""}
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
`;

const Unit = styled.span`
  background: #EAF4FA;
  color: #162C41;
  padding: 10px;
  font-weight: bold;
  border-left: 1px solid #ccc;
`;

export default InputField;
