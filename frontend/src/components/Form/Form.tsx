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
    saudeinfo: null,
    // fotofile: null,
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const updateFoto = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`fotofile`]: data,
    }));
  }
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

  const handleUserCreation = async () => {
    try {
      // const formDataToSend = new FormData();

      // if (formData.fotofile) {
      //   formDataToSend.append('fotofile', formData.fotofile);
      //   console.log('tem arquivo')
      // }
      // formDataToSend.append('geral', JSON.stringify(formData.geral));
      // formDataToSend.append('escola', JSON.stringify(formData.escola));
      // formDataToSend.append('mae', JSON.stringify(formData.mae));
      // formDataToSend.append('pai', JSON.stringify(formData.pai));
      // formDataToSend.append('maisinfo', JSON.stringify(formData.maisinfo));
      // formDataToSend.append('saudeinfo', JSON.stringify(formData.saudeinfo));

      // console.log(formDataToSend);

      const teste = await fetch("http://localhost:3002/pacientes/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      })
      const response = await teste.json();
      console.log(response);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  switch (currentStep) {
    case 1:
      return <>
        <button onClick={() => {console.log(formData)}}>Mostrar formData</button>
        <Step1
          nextStep={nextStep}
          updateGeral={(data) => updateGeral(data)}
          updateEscola={(data) => updateEscola(data)}
          updateFoto={(data) => updateFoto(data)}
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
        <button onClick={() => {console.log(formData)}}>Mostrar formData</button>
        <Step4
          prevStep={prevStep}
          updateInfoSaude={(data) => updateInfoSaude(data)}
          handleFormDataSubmit={handleUserCreation}
        />;
      </>
    default:
      return null;
  }
};

export default Form;