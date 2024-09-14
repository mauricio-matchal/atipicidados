"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import { FormData } from './types';

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    geral: null,
    escola: null,
    mae: null,
    pai: null,
    maisinfo: null,
    saudeinfo: null
  });

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
      [`saudeinfo`]: data,
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
          handleFormDataSubmit={handleUserCreation}
        />;
      </>
    
    default:
      return null;
  }
};

export default Form;