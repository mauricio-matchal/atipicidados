import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import DateInput from '../DateInput';
import TextInput from '../TextInput';
import CheckInput from '../CheckInput';
import FileInput from '../FileInput';
import NumberInput from '../NumberInput';

const Step4: React.FC<StepProps> = ({ formData, setFormData, prevStep }) => {
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>([]);
  const [hasMedicacao, setHasMedicacao] = useState(false);
  const [hasDiagnostico, setHasDiagnostico] = useState(false);
  const [hasComorbidade, setHasComorbidade] = useState(false);
  const [hasAsma, setHasAsma] = useState(false);

  const handleCheckboxChange = (options: string[]) => {
    setSelectedCheckboxOptions(options);
    console.log(selectedCheckboxOptions);
  };

  const handleMedicacaoChange = (selectedOption: string) => {
    setHasMedicacao(selectedOption === 'Sim, toma alguma medicação');
  };

  const handleDiagnosticoChange = (selectedOption: string) => {
    setHasDiagnostico(selectedOption === 'Sim, tem diagnóstico');
  };

  const handleComorbidadeChange = (selectedOption: string) => {
    setHasComorbidade(selectedOption === 'Sim, possui alguma comorbidade');
  };

  const handleAsmaChange = (selectedOption: string) => {
    setHasAsma(selectedOption === 'Sim, tem asma');
  };
  
  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 w-[840px] place-self-center'>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Informações de saúde</h4>

          <div className='flex w-full gap-[12px]'>
            <SelectInput
             options={["Sim, tem diagnóstico", "Não tem diagnóstico"]}
             placeholder={"Tem diagnóstico?"}
             className='min-w-[300px]'
             onChange={handleDiagnosticoChange}
              />
            <DateInput
              className={`transition-opacity duration-300 w-full ${hasDiagnostico ? 'opacity-100' : 'opacity-40'} ${hasDiagnostico ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasDiagnostico}
              style={{ pointerEvents: hasDiagnostico ? 'auto' : 'none' }} 
            />
          </div>

          <div className='flex w-full gap-[12px]'>
            <SelectInput
             options={["Sim, toma alguma medicação", "Não toma alguma medicação"]}
             placeholder={"Toma alguma medicação?"}
             className='min-w-[300px]'
             onChange={handleMedicacaoChange}
              />
            <TextInput
              placeholder='Qual(is) medicação(ões)?'
              className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasMedicacao}
              style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }} 
              />
          </div>
          
          <div className='flex w-full gap-[12px]'>
            <TextInput
            placeholder="Médico responsável"
            className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`} 
            disabled={!hasMedicacao}
            style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }} 
            />
            <NumberInput
            placeholder="Contato do médico responsável"
            className={`transition-opacity duration-300 min-w-[300px] ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`} 
            disabled={!hasMedicacao}
            style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }} 
             />
          </div>

          <TextInput
            placeholder='Objetivo da medicação'
            className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`} 
            disabled={!hasMedicacao}
            style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }} 
           />
        
          <div className='flex w-full gap-[12px]'>
            <SelectInput
             options={["Sim, possui alguma comorbidade", "Não possui alguma comorbidade"]}
             placeholder={"Possui alguma comorbidade?"}
             className='min-w-[300px]'
             onChange={handleComorbidadeChange} />
            <TextInput 
              placeholder='Qual(is) comorbidade(s)?'
              className={`transition-opacity duration-300 w-full ${hasComorbidade ? 'opacity-100' : 'opacity-40'} ${hasComorbidade ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasComorbidade}
              style={{ pointerEvents: hasComorbidade ? 'auto' : 'none' }} 
             />
          </div>

          <TextInput placeholder='Providências tomadas após o diagnóstico ou suspeita' />

          <CheckInput title='Possui alguma doença?' options={["Diabetes", "Pressão alta", "Nenhuma"]} onChange={handleCheckboxChange}/>
          <CheckInput title='Possui alguma alergia?' options={["Rinite", "Sinusite", "Nenhuma"]} onChange={handleCheckboxChange}/>

          <div className='flex w-full gap-[12px]'>
            <SelectInput
             options={["Sim, tem asma", "Não tem asma"]}
              placeholder={"Tem asma?"}
              className='min-w-[300px]'
              onChange={handleAsmaChange}  />
            <FileInput
              placeholder="Relatório do diagnóstico"
              className={`transition-opacity duration-300 w-full ${hasAsma ? 'opacity-100' : 'opacity-40'} ${hasAsma ? '' : 'cursor-not-allowed'}`} 
              disabled={!hasAsma}
              style={{ pointerEvents: hasAsma ? 'auto' : 'none' }} 
              />
          </div>

          <TextInput placeholder='Alguma informação de saúde relevante?' className='h-[86px]'/>

        </div>
      </div>

      {/* Rodapé */}
      <div className='relative flex flex-row justify-between items-center mx-[147px]'>
      <button onClick={prevStep} className='botao'>Página anterior</button>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          4 de 4
        </div>

        <button className='botao' type='submit'>Enviar</button>
      </div>
    </div>
  );
};

export default Step4;
