import React from "react";
import styled from "styled-components";

const RadioButton = ({ label, name, value, register, defaultChecked }) => {
  return (
    <RadioContainer>
      <input type="radio" {...register(name)} value={value} defaultChecked={defaultChecked} />
      <span>{label}</span>
    </RadioContainer>
  );
};

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export default RadioButton;
