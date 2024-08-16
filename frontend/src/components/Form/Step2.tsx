import React, { useState } from 'react';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import DateInput from '../DateInput';
import NumberInput from '../NumberInput';

type Step2State = {
  mae: {
    nome: string;
    data: string;
    rg: string;
    cpf: string;
    escolaridade: string;
    telefone: string;
    email: string;
  }
  pai: {
    nome: string;
    data: string;
    rg: string;
    cpf: string;
    escolaridade: string;
    telefone: string;
    email: string;
  }
};


const Step2: React.FC<{ nextStep: () => void; prevStep: () => void; }> = ({ nextStep, prevStep }) => {
  const [Step2, setStep2] = useState<Step2State>({
    mae: {
      nome: "",
      data: "",
      rg: "",
      cpf: "",
      escolaridade: "",
      telefone: "",
      email: "",
    },
    pai: {
      nome: "",
      data: "",
      rg: "",
      cpf: "",
      escolaridade: "",
      telefone: "",
      email: ""
    }
  });

  const handleInputChange = (section: keyof Step2State, key: string, value: string) => {
    setStep2((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
  };

  const reveal = () => {
    console.log(Step2);
  }

  const [responsavelOutro, setResponsavelOutro] = useState(false);

  const handleResponsavelChange = (selectedOption: string) => {
    setResponsavelOutro(selectedOption === 'Outro');
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Mãe</h4>
          <button onClick={reveal}>reveal</button>

          <TextInput placeholder="Nome completo da mãe" value={Step2.mae.nome} onChange={(e) => handleInputChange("mae", "nome", e.target.value)} />

          <div className='flex w-full gap-[12px]'>
            <DateInput value={Step2.mae.data} onChange={(e) => handleInputChange("mae", "data", e.target.value)} />
            <TextInput placeholder='RG da mãe' className='min-w-[220px]' value={Step2.mae.rg} onChange={(e) => handleInputChange("mae", "rg", e.target.value)} />
            <TextInput placeholder='CPF da mãe' className='min-w-[220px]' value={Step2.mae.cpf} onChange={(e) => handleInputChange("mae", "cpf", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput
              placeholder={"Escolaridade"}
              options={[
                "Ensino fundamental incompleto",
                "Ensino fundamental completo",
                "Ensino médio completo",
                "Técnico/profissionalizante",
                "Cursando ensino superior",
                "Ensino superior completo"
              ]}
              onChange={(value) => handleInputChange("mae", "escolaridade", value)}
            />
            <NumberInput placeholder="Telefone de contato" value={Step2.mae.telefone} onChange={(e) => handleInputChange("mae", "telefone", e.target.value)} />
            <TextInput placeholder="E-mail" value={Step2.mae.email} onChange={(e) => handleInputChange("mae", "email", e.target.value)} />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Pai</h4>

          <TextInput placeholder="Nome completo do pai" value={Step2.pai.nome} onChange={(e) => handleInputChange("pai", "nome", e.target.value)} />

          <div className='flex w-full gap-[12px]'>
            <DateInput value={Step2.pai.data} onChange={(e) => handleInputChange("pai", "data", e.target.value)} />
            <TextInput placeholder='RG do pai' className='min-w-[220px]' value={Step2.pai.rg} onChange={(e) => handleInputChange("pai", "rg", e.target.value)} />
            <TextInput placeholder='CPF do pai' className='min-w-[220px]' value={Step2.pai.cpf} onChange={(e) => handleInputChange("pai", "cpf", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput
              placeholder={"Escolaridade"}
              options={[
                "Ensino fundamental incompleto",
                "Ensino fundamental completo",
                "Ensino médio completo",
                "Técnico/profissionalizante",
                "Cursando ensino superior",
                "Ensino superior completo"
              ]}
              onChange={(value) => handleInputChange("pai", "escolaridade", value)}
            />
            <NumberInput placeholder="Telefone de contato" value={Step2.pai.telefone} onChange={(e) => handleInputChange("pai", "telefone", e.target.value)} />
            <TextInput placeholder="E-mail" value={Step2.pai.email} onChange={(e) => handleInputChange("pai", "email", e.target.value)} />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <SelectInput
            placeholder={"Responsável que compareceu ao acolhimento"}
            options={["Mãe", "Pai", "Outro"]}
            onChange={handleResponsavelChange}
          />
          {responsavelOutro && (
            <div className='flex flex-col gap-[12px]'>
              <h4 className='pl-2'>Informações do responsável</h4>

              <TextInput placeholder="Nome completo do responsável" />

              <div className='flex w-full gap-[12px]'>
                <DateInput />
                <TextInput placeholder='RG do responsável' className='min-w-[220px]' />
                <TextInput placeholder='CPF do responsável' className='min-w-[220px]' />
              </div>

              <div className='flex w-full gap-[12px]'>
                <SelectInput placeholder={"Escolaridade"} options={["Ensino fundamental incompleto", "Ensino fundamental completo", "Ensino médio completo", "Técnico/profissionalizante", "Cursando ensino superior", "Ensino superior completo"]} />
                <NumberInput placeholder="Telefone de contato" />
                <TextInput placeholder="E-mail" />
              </div>

            </div>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <div className='relative flex flex-row justify-between items-center mx-[147px]'>
        <button onClick={prevStep} className='botao'>Página anterior</button>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          2 de 4
        </div>

        <button onClick={nextStep} className='botao'>Próxima página</button>
      </div>
    </div>
  );
};

export default Step2;
