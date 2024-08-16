import React, { useEffect, useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
  const [JSON, setJSON] = useState({
    "1": "",
    "2": ""
  });
  
  const handleInputChange = (key: string, value: string) => {
    setJSON({
      ...JSON,
      [key]: value,
    });
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Geral</h4>

          <div className='flex w-full gap-[12px]'>
            <FileInput placeholder='Foto 3x4' className='min-w-[260px]' />
            <TextInput placeholder='Nome completo' value={JSON["2"]} onChange={(e) => handleInputChange("2", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <DateInput />
            <TextInput placeholder='RG' className='min-w-[220px]' />
            <TextInput placeholder='CPF' className='min-w-[220px]' />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput options={["Masculino", "Feminino", "Intersexo", "Outro sexo", "Prefiro não dizer o sexo"]} placeholder={"Sexo"} />
            <SelectInput options={["Sim, possui NIS", "Não possui NIS"]} placeholder={"Possui NIS?"} />
            <SelectInput options={["Sim, recebe BPC", "Não recebe BPC"]} placeholder={"Recebe BPC?"} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Gênero" />
            <SelectInput options={["Sim, recebe Bolsa Família", "Não recebe Bolsa Família"]} placeholder={"Recebe Bolsa Família?"} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput options={["Sim, possui ADI", "Não possui ADI"]} placeholder={"Possui ADI?"} />
            <SelectInput options={["Sim, tem Passe Livre", "Não tem Passe Livre"]} placeholder={"Tem Passe Livre municipal e intermunicipal?"} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Responsável no atendimento" />
            <FileInput placeholder="Carteira CIPTEA" />
          </div>

          <TextInput placeholder="Endereço da terapia (ex.: Rua X, Bairro Y, nº10)" />

          <SelectInput options={["Mãe", "Pai", "Mãe e Pai", "Outra composição"]} placeholder={"Composição familiar"} />
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Escola</h4>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Nome da escola" />
            <TextInput placeholder="Série" />
          </div>

          <TextInput placeholder="Endereço da escola" />

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Tipo"} options={["Pública", "Particular", "Outro tipo de escola"]} />
            <TextInput placeholder="Tempo de estudo (em anos)" />
          </div>

          <FileInput placeholder="Relatório Escolar" />

          <TextInput placeholder="Responsável no atendimento" />
        </div>
      </div>

      {/* Rodapé */}
      <div className='relative flex flex-row justify-between items-center mx-[147px]'>
        <button></button>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          1 de 4
        </div>

        <button onClick={nextStep} className='botao'>Próximo</button>
      </div>
    </div>
  );
};

export default Step1;
