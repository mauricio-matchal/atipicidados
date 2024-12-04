"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

interface FormProps {
  id: any;
}

type FormData = {
  email: string | null;
  password: string | null;
  geral: any | null;
  escola: any | null;
  mae: any | null;
  pai: any | null;
  maisinfo: any | null;
  saudeinfo: any | null;
  fotofile: File | null;
  relescolar: File | null;
  laudofile: File | null;
  rgdocfile: File | null;
  compresfile: File | null;
};

const Form: React.FC<FormProps> = ({ id }) => {
  const [currentStep, setCurrentStep] = useState(1);
  // const pacienteData
  const [formData, setFormData] = useState<FormData>({
    email: null,
    password: null,
    geral: null,
    escola: null,
    mae: null,
    pai: null,
    maisinfo: null,
    saudeinfo: null,
    fotofile: null,
    relescolar: null,
    laudofile: null,
    rgdocfile: null,
    compresfile: null,
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  useEffect(() => {
    fetchData(id);
    // get id by through clicking a pacient card
  }, [id])

  const fetchData = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3002/pacientes/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch paciente data");
      }
      const data = await response.json();
      setFormData(data);
      // setPacienteData(data);
    } catch (error) {
      console.error("Error fetching paciente data:", error);
    }
  }

  const updateDataAt = (data: any, type: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: data,
    }))
  }
  const updateLogin = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'email': data.email,
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
  };

  switch (currentStep) {
    case 1:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step1
          nextStep={nextStep}

          receivedFormData={formData}

          updateLogin={(data) => updateLogin(data)}
          updateGeral={(data) => updateDataAt(data, "geral")}
          updateEscola={(data) => updateDataAt(data, "escola")}
          updateFoto={(data) => updateDataAt(data, "fotofile")}
          updateRelatorio={(data) => updateDataAt(data, "relescolar")}
          updateRG={(data) => updateDataAt(data, "rgdocfile")}
          updateResidencia={(data) => updateDataAt(data, "compresfile")}
        />;
      </>
    case 2:
      return <Step2
        nextStep={nextStep}
        prevStep={prevStep}

        receivedFormData={formData}

        updateMae={(data) => updateDataAt(data, "mae")}
        updatePai={(data) => updateDataAt(data, "pai")}
      />;
    case 3:
      return <Step3
        nextStep={nextStep}
        prevStep={prevStep}

        receivedFormData={formData}

        updateMaisInfo={(data) => updateDataAt(data, "maisinfo")}
      />;
    case 4:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step4
          prevStep={prevStep}

          receivedFormData={formData}

          updateInfoSaude={(data) => updateDataAt(data, "saudeinfo")}
          updateLaudoFile={(data) => updateDataAt(data, "laudofile")}
          handleFormDataSubmit={handleUserEdition}
        />;
      </>
    default:
      return null;
  }
};

export default Form;