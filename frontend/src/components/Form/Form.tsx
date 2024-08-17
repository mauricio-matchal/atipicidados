"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { FormData } from './types';

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: null,
    step2Data: null,
    step3Data: null,
    step4Data: null
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const updateFormData = (step: number, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`step${step}Data`]: data,
    }));
  };

  const reveal = () => {
    console.log(formData);
  }

  const handleUserCreation = async () => {
    try {
      const teste = await fetch("http://localhost:3002/pacientes/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      })
      const response = await teste.json();
      console.log(response);
    } catch {

    }
  }

  switch (currentStep) {
    case 1:
      return <>
        <button onClick={reveal}>reveal</button>
        <Step1 nextStep={nextStep} updateFormData={(data) => updateFormData(1, data)} />;
      </>
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={(data) => updateFormData(2, data)} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} updateFormData={(data) => updateFormData(3, data)} />;
    case 4:
      return <>
        <button onClick={reveal}>reveal</button>
        <button onClick={handleUserCreation}>rodar a rota</button>
        <Step4 prevStep={prevStep} updateFormData={(data) => updateFormData(4, data)} />;
      </>
    default:
      return null;
  }
};

export default Form;