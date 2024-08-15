import React from 'react';
import { StepProps } from './types';

const Step3: React.FC<StepProps> = ({ formData, setFormData, nextStep, prevStep }) => {

  return (
    <div>
      <h2>Step 3: Informações Adicionais</h2>
      <input
        type="number"
        placeholder="Idade"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
      />

      <div className='flex flex-row justify-between items-center'>
        <button onClick={prevStep} className='botao'>Anterior</button>

        <div>
          3 de 4 
        </div>

        <button onClick={nextStep} className='botao'>Próximo</button>
      </div>
    </div>
  );
};

export default Step3;
