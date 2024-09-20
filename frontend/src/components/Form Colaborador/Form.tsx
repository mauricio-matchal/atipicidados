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
    unidadeId: null,
    raca: null,
    rg: null,
    nascimento: null,
    titulo: null,
    formacao: null,
    genero: null,
  });

  const updateForm = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'nome': data.nome,
      'telefone': data.telefone,
      'cpf': data.cpf,
      'unidadeId': data.unidadeId,
      'raca': data.raca,
      'rg': data.rg,
      'nascimento': data.nascimento,
      'titulo': data.titulo,
      'formacao': data.formacao,
      'genero': data.genero,
    }));
  };
  const updateLogin = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'login': data.login,
      'password': data.senha,
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
          updateLogin={(data) => updateLogin(data)}
        />;
      </>

    default:
      return null;
  }
};

export default Form;