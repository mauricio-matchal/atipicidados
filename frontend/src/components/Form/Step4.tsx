import React from 'react';
import { StepProps } from './types';

const Step4: React.FC<StepProps> = ({ formData, setFormData, prevStep }) => {
  return (
    <div className='flex flex-col'>
      <h4>Geral</h4>
      <input
        type="number"
        placeholder="Idade"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
      />
      <div className='flex flex-row justify-between items-center'>
        <button onClick={prevStep} className='botao'>Anterior</button>

        <div>
          4 de 4 
        </div>

        <button onClick={() => alert('Formulário enviado!')} className='botao'>Enviar</button>
      </div>
    </div>
  );
};

export default Step4;
