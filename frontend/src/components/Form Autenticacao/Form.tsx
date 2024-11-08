"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { FormData } from './types';

interface FormProps {
  id: string;
}

const Form: React.FC<FormProps> = ({ id }) => {
  const [currentStep, setCurrentStep] = useState(1);
  // const pacienteData
  const [formData, setFormData] = useState({
    geral: null,
    escola: null,
    mae: null,
    pai: null,
    maisinfo: null,
    saudeinfo: null
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  useEffect(() => {
    fetchData(id);
    // get id by through clicking a pacient card
  })

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

  const putData = async (data: string, id: string, type: string) => {
    try {
      const response = await fetch(`http://localhost:3002/pacientes/put${type}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
          geral: JSON.stringify(data),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const updatedPaciente = await response.json();
      console.log("Data updated successfully:", updatedPaciente);
      return updatedPaciente;
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }

  const handleUserEdition = async () => {
    try {
      if (formData.geral) {
        await putData(formData.geral, id, "geral");
      }
      if (formData.escola) {
        await putData(formData.escola, id, "escola");
      }
      if (formData.mae) {
        await putData(formData.mae, id, "mae");
      }
      if (formData.pai) {
        await putData(formData.pai, id, "pai");
      }
      if (formData.maisinfo) {
        await putData(formData.maisinfo, id, "maisinfo");
      }
      if (formData.saudeinfo) {
        await putData(formData.saudeinfo, id, "saudeinfo");
      }

      console.log("All updates completed successfully");
    } catch (error) {
      console.error("Error during the update process:", error);
    }
  };

  switch (currentStep) {
    case 1:
      return <>
        {/* <button onClick={reveal}>reveal</button> */}
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
        {/* <button onClick={reveal}>reveal</button> */}
        <button onClick={handleUserEdition}>rodar a rota</button>
        <Step4
          prevStep={prevStep}
          updateInfoSaude={(data) => updateInfoSaude(data)}
          handleFormDataSubmit={handleUserEdition}
        />;
      </>
    default:
      return null;
  }
};

export default Form;