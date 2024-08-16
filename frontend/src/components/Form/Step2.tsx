import React, { useState } from 'react';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import DateInput from '../DateInput';
import NumberInput from '../NumberInput';

const Step2: React.FC<{ nextStep: () => void; prevStep: () => void; }> = ({ formData, nextStep, prevStep }) => {
  const [responsavelOutro, setResponsavelOutro] = useState(false);
  
  const handleResponsavelChange = (selectedOption: string) => {
    setResponsavelOutro(selectedOption === 'Outro');
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Mãe</h4>

          <TextInput placeholder="Nome completo da mãe" />

          <div className='flex w-full gap-[12px]'>
            <DateInput />
            <TextInput placeholder='RG da mãe' className='min-w-[220px]' />
            <TextInput placeholder='CPF da mãe' className='min-w-[220px]' />
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
            />
            <NumberInput placeholder="Telefone de contato" />
            <TextInput placeholder="E-mail" />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Pai</h4>

          <TextInput placeholder="Nome completo do pai" />

          <div className='flex w-full gap-[12px]'>
            <DateInput />
            <TextInput placeholder='RG do pai' className='min-w-[220px]' />
            <TextInput placeholder='CPF do pai' className='min-w-[220px]' />
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
            />
            <NumberInput placeholder="Telefone de contato" />
            <TextInput placeholder="E-mail" />
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
