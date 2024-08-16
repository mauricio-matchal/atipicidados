import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import CheckInput from '../CheckInput';
import DateInput from '../DateInput';
import NumberInput from '../NumberInput';

const Step3: React.FC<StepProps> = ({ nextStep, prevStep }) => {
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>([]);
  const [hasNIS, setHasNIS] = useState(false);
  const [hasAtendimento, setHasAtendimento] = useState(false);

  const handleCheckboxChange = (options: string[]) => {
    setSelectedCheckboxOptions(options.filter(option => option !== 'Pai' && option !== 'Mãe'));
  };

  const handleNISChange = (selectedOption: string) => {
    setHasNIS(selectedOption === 'Sim, possui NIS');
  };

  const handleAtendimentoChange = (selectedOption: string) => {
    setHasAtendimento(selectedOption === 'Sim, possui atendimento terapêutico');
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Mais informações</h4>

          <div className='flex w-full gap-[12px]'>
            <SelectInput 
              options={["Sim, possui NIS", "Não possui NIS"]} 
              placeholder={"Possui NIS?"} 
              onChange={handleNISChange} 
            />
            <TextInput 
              placeholder="Número NIS"  
              className={`transition-opacity duration-300 ${hasNIS ? 'opacity-100' : 'opacity-40'} ${hasNIS ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasNIS}
              style={{ pointerEvents: hasNIS ? 'auto' : 'none' }} 
            />
          </div>
          
          <div className='flex w-full gap-[12px]'>
            <SelectInput 
              options={["Sim, recebe BPC", "Não recebe BPC"]} 
              placeholder={"Recebe BPC?"} 
            />
            <SelectInput 
              options={["Sim, recebe Bolsa Família", "Não recebe Bolsa Família"]} 
              placeholder={"Recebe Bolsa Família?"} 
            />
            <SelectInput 
              options={["Sim, tem carteira CIPTEA", "Não tem carteira CIPTEA"]} 
              placeholder={"Tem carteira CIPTEA?"} 
            />
          </div>

          <CheckInput 
            options={["Municipal", "Intermunicipal", "Interestadual", "Nenhum"]} 
            title={"Tem Passe Livre?"} 
            onChange={handleCheckboxChange}
          />
        
          <div className='flex w-full gap-[12px]'>
            <SelectInput 
              options={["Sim, possui atendimento terapêutico", "Não possui atendimento terapêutico"]} 
              placeholder={"Possui atendimento terapêutico?"} 
              onChange={handleAtendimentoChange}
            />
            <TextInput 
              placeholder={"Qual atendimento?"}
              className={`transition-opacity duration-300 w-full ${hasAtendimento ? 'opacity-100' : 'opacity-40'} ${hasAtendimento ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasAtendimento}
              style={{ pointerEvents: hasAtendimento ? 'auto' : 'none' }} 
            />
          </div>

          <div className='flex w-full gap-[12px]'>
            <TextInput 
              placeholder="Endereço do atendimento terapêutico"
              className={`transition-opacity duration-300 w-full ${hasAtendimento ? 'opacity-100' : 'opacity-40'} ${hasAtendimento ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasAtendimento}
              style={{ pointerEvents: hasAtendimento ? 'auto' : 'none' }} 
             />
            <TextInput placeholder="Renda familiar" />
          </div>

          <CheckInput 
            options={["Pai", "Mãe", "Avô", "Avó", "Tio", "Tia"]} 
            title={"Quem mora na casa com a criança?"} 
            onChange={handleCheckboxChange}
          />

          {selectedCheckboxOptions.map((responsavel, index) => (
            <div key={index} className='flex flex-col gap-[12px] mt-4'>
              <h4 className='pl-2'>Informações {responsavel}</h4>
              
              <TextInput placeholder="Nome completo" />
              
              <div className='flex w-full gap-[12px]'>
                <DateInput />
                <TextInput placeholder='RG' className='min-w-[220px]' />
                <TextInput placeholder='CPF' className='min-w-[220px]' />
              </div>

              <div className='flex w-full gap-[12px]'>
                <SelectInput 
                  placeholder={"Escolaridade"} 
                  options={["Ensino fundamental incompleto", "Ensino fundamental completo", "Ensino médio completo", "Técnico/profissionalizante", "Cursando ensino superior", "Ensino superior completo"]} 
                />
                <NumberInput placeholder="Telefone de contato" />
                <TextInput placeholder="E-mail" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <div className='relative flex flex-row justify-between items-center mx-[147px]'>
        <button onClick={prevStep} className='botao'>Página anterior</button>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          3 de 4
        </div>

        <button onClick={nextStep} className='botao'>Próxima página</button>
      </div>
    </div>
  );
};

export default Step3;
