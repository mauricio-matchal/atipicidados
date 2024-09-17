"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import { FormData } from './types';

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: null,
    password: null,

    nome: null, 
    telefone: null,
    cpf: null,
    rg: null,
    raca: null,
    unidadeId: null,
  });

  const updateForm = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'nome': data.nome,
      'telefone': data.telefone,
      'cpf': data.cpf,
      'rg': data.rg,
      'raca': data.raca,
      'unidadeId': data.unidadeId
    }));
  };
  const updateLogin = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'email': data.email,
      'password': data.senha
    }));
  };


  const reveal = () => {
    console.log(formData);
  }

  const handleUserCreation = async () => {
    try {
      const teste = await fetch("http://localhost:3002/gerentes/", {
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
          updateLogin={(data) => updateLogin(data)}
          updateForm={(data) => updateForm(data)}
        />;
      </>
    
    default:
      return null;
  }
};

export default Form;