import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

const Step1: React.FC<{ nextStep: () => void}> = ({ nextStep }) => {


  const reveal = () => {
  }

  const [hasRelatorio, setHasRelatorio] = useState(false);

  const handleNext = () => {
    
    nextStep();
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h2 className="font-bold">Novo Paciente</h2>

          <h4 className='pl-2 place-self-start mt-10'>Geral</h4>
          {/* <button onClick={reveal}>reveal</button> */}
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
