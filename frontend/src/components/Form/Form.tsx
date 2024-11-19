"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
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

  const updateDataAt = (data: any, type: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: data,
    }))
  }

  const handleUserCreation = async () => {
    const data = new FormData();

    data.append('cpf', "27384512832");
    data.append('password', "bSENHAALEATORIA");
    data.append('email', 'bemailaleatorio@gmail.com');
    data.append('geral', JSON.stringify(formData.geral));
    data.append('mae', JSON.stringify(formData.mae));
    data.append('pai', JSON.stringify(formData.pai));
    data.append('maisinfo', JSON.stringify(formData.maisinfo));
    data.append('escola', JSON.stringify(formData.escola));

    if (formData.fotofile) {
      data.append('fotofile', formData.fotofile);
      console.log('tem foto')
    }
    if (formData.relescolar) {
      data.append('relescolar', formData.relescolar);
      console.log('tem relatorio')
    }
    if (formData.laudofile) {
      data.append('laudofile', formData.laudofile);
      console.log('tem laudo')
    }
    if (formData.compresfile) {
      data.append('compresfile', formData.compresfile);
      console.log('tem comprovante de residencia')
    }
    if (formData.rgdocfile) {
      data.append('rgdocfile', formData.rgdocfile);
      console.log('tem rg')
    }

    console.log(data);

    try {

      const response = await fetch("http://localhost:3002/pacientes/", {
        method: "POST",
        body: data, // mudar caso queira colocar o blob para body: formDataToSend, 
        // headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json();
      console.log(result);

      router.push("/")
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  switch (currentStep) {
    case 1:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step1
          nextStep={nextStep}
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
        updateMae={(data) => updateDataAt(data, "mae")}
        updatePai={(data) => updateDataAt(data, "pai")}
      />;
    case 3:
      return <Step3
        nextStep={nextStep}
        prevStep={prevStep}
        updateMaisInfo={(data) => updateDataAt(data, "maisinfo")}
      />;
    case 4:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step4
          prevStep={prevStep}
          updateInfoSaude={(data) => updateDataAt(data, "infosaude")}
          handleFormDataSubmit={handleUserCreation}
          updateLaudoFile={(data) => updateDataAt(data, "laudofile")}
        />;
      </>
    default:
      return null;
  }
};

export default Form;