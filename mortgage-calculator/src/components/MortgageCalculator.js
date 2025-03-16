import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import InputField from "./InputField";
import RadioButton from "./RadioButton";

const schema = yup.object().shape({
  amount: yup.number().required().positive(),
  years: yup.number().required().positive(),
  rate: yup.number().required().positive(),
  type: yup.string().required(),
});

const MortgageCalculator = ({ setResults }) => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { amount, years, rate, type } = data;
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;

    let monthlyPayment;
    if (type === "Repayment") {
      monthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
    } else {
      monthlyPayment = (amount * monthlyRate);
    }

    const totalRepayment = monthlyPayment * totalMonths;

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TopBar>
        <h2>Mortgage Calculator</h2>
        <ClearAll>Clear All</ClearAll>
      </TopBar>

      <InputField label="Mortgage Amount" type="number" name="amount" register={register} />
      <Row>
        <InputField label="Mortgage Term" type="number" name="years" register={register} />
        <span>years</span>
        <InputField label="Interest Rate" type="number" name="rate" register={register} />
        <span>%</span>
      </Row>

      <RadioGroup>
        <RadioButton name="type" label="Repayment" value="Repayment" register={register} defaultChecked />
        <RadioButton name="type" label="Interest Only" value="Interest Only" register={register} />
      </RadioGroup>

      <SubmitButton type="submit">Calculate Repayments</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearAll = styled.span`
  font-size: 12px;
  color: #666;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SubmitButton = styled.button`
  background: #C6D43C;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #AEBF30;
  }
`;

export default MortgageCalculator;
