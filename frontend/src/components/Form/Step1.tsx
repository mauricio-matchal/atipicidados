import React from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';

const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
  return (
    <div className='flex flex-col gap-[162px]'>
      <div className='flex flex-col gap-[42px]'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Geral</h4>

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

      <div className='flex flex-row justify-between items-center'>
        <button></button>

        <div>
          1 de 4 
        </div>

        <button onClick={nextStep} className='botao'>Próximo</button>
      </div>

    </div>
  );
};

export default Step1;
