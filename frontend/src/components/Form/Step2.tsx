import React from 'react';
import { StepProps } from './types';

const Step2: React.FC<StepProps> = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Step 2: Informações de Contato</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className='flex flex-row justify-between items-center'>
        <button onClick={prevStep} className='botao'>Anterior</button>

        <div>
          2 de 4 
        </div>

        <button onClick={nextStep} className='botao'>Próximo</button>
      </div>
    </div>
  );
};

export default Step2;
