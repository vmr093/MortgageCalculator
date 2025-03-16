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
  const {
    register,
    handleSubmit,
    setValue,  // ✅ Ensure setValue is available
    getValues, // ✅ Helps to persist values
  } = useForm({ resolver: yupResolver(schema) });

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
      <h2>Mortgage Calculator</h2>

      <InputField
        label="Mortgage Amount"
        name="amount"
        register={register}
        onChange={(value) => setValue("amount", value)} // ✅ Ensures value persists
        value={getValues("amount")} // ✅ Keeps the value stored
        currency="$"
      />

      <InputRow>
        <InputField
          label="Mortgage Term"
          name="years"
          register={register}
          onChange={(value) => setValue("years", value)}
          value={getValues("years")} // ✅ Ensures Mortgage Term value persists
          unit="years"
          allowDecimal={false}
        />
        <InputField
          label="Interest Rate"
          name="rate"
          register={register}
          onChange={(value) => setValue("rate", value)}
          value={getValues("rate")} // ✅ Ensures Interest Rate value persists
          unit="%"
          allowDecimal={true}
        />
      </InputRow>

      <RadioButton name="type" label="Repayment" value="Repayment" register={register} defaultChecked />
      <RadioButton name="type" label="Interest Only" value="Interest Only" register={register} />

      <button type="submit">Calculate Repayments</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export default MortgageCalculator;
