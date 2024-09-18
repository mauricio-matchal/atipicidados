import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

type Step11State = {
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
type Step12State = {
  nome: string;
  serie: string;
  endereco: string;
  cidade: string;
  possuiAdi: string;
  tipo: string;
  tempoNaEscola: string;
  possuiRelatorio: string;
};


const Step1: React.FC<{ 
  nextStep: () => void;
  updateFoto: (data: any) => void;
  updateRelatorio: (data: any) => void;
  updateRG: (data: any) => void;
  updateResidencia: (data: any) => void;
  updateGeral: (data: Step11State) => void;
  updateEscola: (data: Step12State) => void
}> = ({ nextStep, updateGeral, updateEscola, updateFoto, updateRelatorio, updateRG, updateResidencia }) => {
  const [Step11, setStep11] = useState<Step11State>({
    nome: "",
    data: "",
    rg: "",
    cpf: "",
    sexo: "",
    cor: "",
    cep: "",
    endereco: "",
    cidade: "",
  });
  const [Step12, setStep12] = useState<Step12State>({
    nome: "",
    serie: "",
    endereco: "",
    cidade: "",
    possuiAdi: "",
    tipo: "",
    tempoNaEscola: "",
    possuiRelatorio: "",
  })

  const handleInputChange1 = (key: string, value: string) => {
    setStep11((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleInputChange2 = (key: string, value: string) => {
    setStep12((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [hasRelatorio, setHasRelatorio] = useState(false);

  const handleRelatorioChange = (selectedOption: string) => {
    setHasRelatorio(selectedOption === 'Sim, possui relatório escolar');
    handleInputChange2("possuiRelatorio", selectedOption);
  };

  // ARQUIVOS //

  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [relatorioFile, setRelatorioFile] = useState<File | null>(null);
  const [rgFile, setRGFile] = useState<File | null>(null);
  const [residenciaFile, setResidenciaFile] = useState<File | null>(null);

  const handleFotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFotoFile(e.target.files[0]);
    }
  };
  const handleRelatorioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setRelatorioFile(e.target.files[0]);
    }
  };
  const handleRGFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setRGFile(e.target.files[0]);
    }
  };
  const handleResidenciaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResidenciaFile(e.target.files[0]);
    }
  };

  //////////

  const handleNext = () => {
    updateGeral(Step11);
    updateEscola(Step12);

    updateFoto(fotoFile);
    updateRelatorio(relatorioFile);
    updateRG(rgFile);
    updateResidencia(residenciaFile);

    nextStep();
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Geral</h4>
          <button onClick={() => { console.log(Step11); console.log(Step12) }}>Mostrar Respostas</button>
          <button onClick={() => { console.log(fotoFile) }}>Mostrar Foto</button>
          <div className='flex w-full gap-[12px]'>
            <FileInput placeholder='Foto 3x4' className='min-w-[260px]' onChange={handleFotoFileChange} name='fotoFile' />
            <TextInput placeholder='Nome completo' value={Step11.nome} onChange={(e) => handleInputChange1("nome", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <FileInput placeholder='Foto do RG' onChange={handleRGFileChange} name='rgFile' />
            <FileInput placeholder='Comprovante de residência' onChange={handleResidenciaFileChange} name='residenciaFile' />
          </div>

          <div className='flex w-full gap-[12px]'>
            <DateInput value={Step11.data} onChange={(e) => handleInputChange1("data", e.target.value)} />
            <TextInput placeholder='RG' className='min-w-[220px]' value={Step11.rg} onChange={(e) => handleInputChange1("rg", e.target.value)} />
            <TextInput placeholder='CPF' className='min-w-[220px]' value={Step11.cpf} onChange={(e) => handleInputChange1("cpf", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput options={["Masculino", "Feminino", "Intersexo", "Outro sexo", "Prefiro não dizer o sexo"]} placeholder={"Sexo"} onChange={(value) => handleInputChange1("sexo", value)} />
            <SelectInput options={["Amarelo", "Branco", "Indígena", "Pardo", "Preto"]} placeholder={"Raça/cor"} onChange={(value) => handleInputChange1("cor", value)} />
            <TextInput placeholder='CEP' className='min-w-[220px]' value={Step11.cep} onChange={(e) => handleInputChange1("cep", e.target.value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Endereço" value={Step11.endereco} onChange={(e) => handleInputChange1("endereco", e.target.value)} />
            <SelectInput options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} placeholder={"Cidade"} onChange={(value) => handleInputChange1("cidade", value)} />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Escola</h4>

          <div className='flex w-full gap-[12px]'>
            <TextInput placeholder="Nome da escola" value={Step12.nome} onChange={(e) => handleInputChange2("nome", e.target.value)} />
            <SelectInput placeholder="Série" options={["1ª série", "2ª série", "3ª série", "4ª série", "5ª série", '6ª série', '8ª série']} className='min-w-[260px]' onChange={(value) => handleInputChange2("serie", value)} />
          </div>

          <TextInput placeholder="Endereço da escola" value={Step12.endereco} onChange={(e) => handleInputChange2("endereco", e.target.value)} />

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Cidade da escola"} options={["Salvador", "Lauro de Freitas", "Camaçari", "Catu"]} onChange={(value) => handleInputChange2("cidade", value)} />
            <SelectInput options={["Sim, possui ADI", "Não possui ADI"]} placeholder={"Possui ADI?"} onChange={(value) => handleInputChange2("possuiAdi", value)} />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput placeholder={"Tipo da escola"} options={["Pública", "Particular"]} className='min-w-[260px]' onChange={(value) => handleInputChange2("tipo", value)} />
            <SelectInput placeholder={"Há quanto tempo estuda na escola?"} options={["Menos de 1 ano", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "6 anos", "7 anos", "8 anos", "9 anos", "10 anos", "Mais de 10 anos"]} onChange={(value) => handleInputChange2("tempoNaEscola", value)} />
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
              name='relatorioFile'
              onChange={handleRelatorioFileChange}
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

        <button onClick={handleNext} className='botao'>Próxima página</button>
      </div>
    </div>
  );
};

export default Step1;