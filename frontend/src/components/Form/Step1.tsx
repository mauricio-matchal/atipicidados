import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

type Step1State = {
  geral: {
    nome: string;
    data: string;
    rg: string;
    cpf: string;
    sexo: string;
    cor: string;
    cep: string;
    endereco: string;
    cidade: string;
  };
  escola: {
    nome: string;
    serie: string;
    endereco: string;
    cidade: string;
    possuiAdi: string;
    tipo: string;
    tempoNaEscola: string;
    possuiRelatorio: string;
  };
  fotofile: {
    fotofile: string;
  };
  relatorioFile: {
    relatorioFile: string;
  };
};


const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {
  const [Step1, setStep1] = useState<Step1State>({
    geral: {
      nome: "",
      data: "",
      rg: "",
      cpf: "",
      sexo: "",
      cor: "",
      cep: "",
      endereco: "",
      cidade: "",
    },
    escola: {
      nome: "",
      serie: "",
      endereco: "",
      cidade: "",
      possuiAdi: "",
      tipo: "",
      tempoNaEscola: "",
      possuiRelatorio: "",
    },
    fotofile: {
      fotofile: ""
    },
    relatorioFile: {
      relatorioFile: ""
    }
  });

  const handleInputChange = (section: keyof Step1State, key: string, value: string) => {
    setStep1((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
  };

  const reveal = () => {
    console.log(Step1);
  }

  const [hasRelatorio, setHasRelatorio] = useState(false);

  const handleRelatorioChange = (selectedOption: string) => {
    setHasRelatorio(selectedOption === 'Sim, possui relatório escolar');
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Geral</h4>
          <button onClick={reveal}>reveal</button>

          <div className='flex w-full gap-[12px]'>
            <FileInput placeholder='Foto 3x4' className='min-w-[260px]' />
            <TextInput placeholder='Nome completo' value={Step1.geral.nome} onChange={(e) => handleInputChange("geral", "nome", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <DateInput value={Step1.geral.data} onChange={(e) => handleInputChange("geral", "data", e.target.value)}/>
            <TextInput placeholder='RG' className='min-w-[220px]' value={Step1.geral.rg} onChange={(e) => handleInputChange("geral", "rg", e.target.value)} />
            <TextInput placeholder='CPF' className='min-w-[220px]' value={Step1.geral.cpf} onChange={(e) => handleInputChange("geral", "cpf", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput options={["Masculino", "Feminino", "Intersexo", "Outro sexo", "Prefiro não dizer o sexo"]} placeholder={"Sexo"} onChange={(value) => handleInputChange("geral", "sexo", value)} />
            <SelectInput options={["Amarelo", "Branco", "Indígena", "Pardo", "Preto"]} placeholder={"Raça/cor"} onChange={(value) => handleInputChange("geral", "cor", value)} />
            <TextInput placeholder='CEP' className='min-w-[220px]' value={Step1.geral.cep} onChange={(e) => handleInputChange("geral", "cep", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Endereço" value={Step1.geral.endereco} onChange={(e) => handleInputChange("geral", "endereco", e.target.value)} />
            <SelectInput options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} placeholder={"Cidade"} onChange={(value) => handleInputChange("geral", "cidade", value)} />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Escola</h4>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Nome da escola" value={Step1.escola.nome} onChange={(e) => handleInputChange("escola", "nome", e.target.value)} />
            <SelectInput placeholder="Série" options={["1ª série", "2ª série", "3ª série", "4ª série", "5ª série", '6ª série', '8ª série']} className='min-w-[260px]' onChange={(value) => handleInputChange("escola", "serie", value)} />
          </div>

          <TextInput placeholder="Endereço da escola" value={Step1.escola.endereco} onChange={(e) => handleInputChange("escola", "endereco", e.target.value)} />

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Cidade da escola"} options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} onChange={(value) => handleInputChange("escola", "cidade", value)} />
            <SelectInput options={["Sim, possui ADI", "Não possui ADI"]} placeholder={"Possui ADI?"} onChange={(value) => handleInputChange("escola", "possuiAdi", value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Tipo da escola"} options={["Pública", "Particular"]} className='min-w-[260px]' onChange={(value) => handleInputChange("escola", "tipo", value)} />
            <SelectInput placeholder={"Há quanto tempo estuda na escola?"} options={["Menos de 1 ano", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "6 anos", "7 anos", "8 anos", "9 anos", "10 anos", "Mais de 10 anos"]} onChange={(value) => handleInputChange("escola", "tempoNaEscola", value)} />
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
