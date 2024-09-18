"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import { FormData } from './types';

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: null,
    endereco: null,
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const updateForm = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'nome': data.nome,
      'endereco': data.endereco,
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
          updateForm={(data) => updateForm(data)}
        />;
      </>
    default:
      return null;
  }
};

export default Form;