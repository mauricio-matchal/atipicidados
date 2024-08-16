import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
  const [hasRelatorio, setHasRelatorio] = useState(false);

  const handleRelatorioChange = (selectedOption: string) => {
    setHasRelatorio(selectedOption === 'Sim, possui relatório escolar');
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Geral</h4>

          <div className='flex w-full gap-[12px]'>
            <FileInput placeholder='Foto 3x4' className='min-w-[260px]' />
            <TextInput placeholder='Nome completo' />
          </div>

          <div className='flex w-full gap-[12px]'>
            <DateInput />
            <TextInput placeholder='RG' className='min-w-[220px]' />
            <TextInput placeholder='CPF' className='min-w-[220px]' />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput options={["Masculino", "Feminino", "Intersexo", "Outro sexo", "Prefiro não dizer o sexo"]} placeholder={"Sexo"} />
            <SelectInput options={["Amarelo", "Branco", "Indígena", "Pardo", "Preto"]} placeholder={"Raça/cor"} />
            <TextInput placeholder='CEP' className='min-w-[220px]' />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Endereço" />
            <SelectInput options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} placeholder={"Cidade"} />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Escola</h4>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Nome da escola" />
            <SelectInput placeholder="Série" options={["1ª série", "2ª série", "3ª série", "4ª série", "5ª série", '6ª série', '8ª série']} className='min-w-[260px]' />
          </div>

          <TextInput placeholder="Endereço da escola" />

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Cidade da escola"} options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} />
            <SelectInput options={["Sim, possui ADI", "Não possui ADI"]} placeholder={"Possui ADI?"} />
          </div>
          
          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Tipo da escola"} options={["Pública", "Particular"]} className='min-w-[260px]' />
            <SelectInput placeholder={"Há quanto tempo estuda na escola?"} options={["Menos de 1 ano" ,"1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "6 anos", "7 anos", "8 anos", "9 anos", "10 anos", "Mais de 10 anos"]} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput 
              placeholder={"Possui relatório escolar?"} 
              options={["Sim, possui relatório escolar", "Não possui relatório escolar"]} 
              onChange={handleRelatorioChange} 
            />
            <FileInput 
              placeholder="Relatório Escolar"
              className={`transition-opacity duration-300 w-full ${hasRelatorio ? 'opacity-100' : 'opacity-40'} ${hasRelatorio ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasRelatorio}
              style={{ pointerEvents: hasRelatorio ? 'auto' : 'none' }} 
            />
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className='relative flex flex-row justify-between items-center mx-[147px]'>
        <button></button>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          1 de 4
        </div>

        <button onClick={nextStep} className='botao'>Próxima página</button>
      </div>
    </div>
  );
};

export default Step1;
