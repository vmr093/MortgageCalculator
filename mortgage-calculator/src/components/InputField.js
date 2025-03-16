import React from "react";
import styled from "styled-components";

const InputField = ({ label, name, type, register }) => {
  return (
    <FieldContainer>
      <label>{label}</label>
      <input type={type} {...register(name)} />
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export default InputField;
