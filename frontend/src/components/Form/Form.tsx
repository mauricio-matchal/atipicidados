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
    geral: null,
    escola: null,
    mae: null,
    pai: null,
    maisinfo: null,
    infosaude: null
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const updateGeral = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`geral`]: data,
    }));
  };
  const updateEscola = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`escola`]: data,
    }));
  };
  const updateMae = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`mae`]: data,
    }));
  };
  const updatePai = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`pai`]: data,
    }));
  };
  const updateMaisInfo = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`maisinfo`]: data,
    }));
  };
  const updateInfoSaude = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`infosaude`]: data,
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
        <Step1
          nextStep={nextStep}
          updateGeral={(data) => updateGeral(data)}
          updateEscola={(data) => updateEscola(data)}
        />;
      </>
    case 2:
      return <Step2
        nextStep={nextStep}
        prevStep={prevStep}
        updateMae={(data) => updateMae(data)}
        updatePai={(data) => updatePai(data)}
      />;
    case 3:
      return <Step3
        nextStep={nextStep}
        prevStep={prevStep}
        updateMaisInfo={(data) => updateMaisInfo(data)}
      />;
    case 4:
      return <>
        <button onClick={reveal}>reveal</button>
        <button onClick={handleUserCreation}>rodar a rota</button>
        <Step4
          prevStep={prevStep}
          updateInfoSaude={(data) => updateInfoSaude(data)}
        />;
      </>
    default:
      return null;
  }
};

export default Form;