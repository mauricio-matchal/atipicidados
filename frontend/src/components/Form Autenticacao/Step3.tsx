import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import CheckInput from '../CheckInput';
import DateInput from '../DateInput';
import NumberInput from '../NumberInput';

type Step3State = {
  possuinis: string;
  numeronis: string;
  bpc: string;
  bolsafamilia: string;
  ciptea: string;
  passelivre: [];
  possuiterapia: string;
  qualterapia: string;
  enderecoterapia: string;
  renda: string;
  moradores: [];
};

const Step3: React.FC<{ nextStep: () => void; prevStep: () => void; updateMaisInfo: (data: Step3State) => void }> = ({ nextStep, prevStep, updateMaisInfo }) => {
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>([]);
  const [hasNIS, setHasNIS] = useState(false);
  const [hasAtendimento, setHasAtendimento] = useState(false);

  const [Step3, setStep3] = useState<Step3State>({
    possuinis: "",
    numeronis: "",
    bpc: "",
    bolsafamilia: "",
    ciptea: "",
    passelivre: [],
    possuiterapia: "",
    qualterapia: "",
    enderecoterapia: "",
    renda: "",
    moradores: [],
  });

  const handleInputChange = (key: string, value: string) => {
    setStep3((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleInputChangeList = (key: string, value: string[]) => {
    setStep3((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleTest = async () => {
    try {
      const teste = await fetch("http://localhost:3002/pacientes/", {
        method: "POST",
        body: JSON.stringify(Step3),
        headers: { 'Content-Type': 'application/json' }
      })
      const response = await teste.json();
      console.log(response);
    } catch {

    }
  }

  const reveal = () => {
    console.log(Step3);
  }

  const handlePasseLivreChange = (options: string[]) => {
    setSelectedCheckboxOptions(options.filter(option => option !== 'Pai' && option !== 'Mãe'));
    handleInputChangeList("passelivre", options);
  };

  const handleMoradorChange = (options: string[]) => {
    setSelectedCheckboxOptions(options.filter(option => option !== 'Pai' && option !== 'Mãe'));
    handleInputChangeList("moradores", options);
  };

  const handleNISChange = (selectedOption: string) => {
    setHasNIS(selectedOption === 'Sim, possui NIS');
    handleInputChange("possuinis", selectedOption);
  };

  const handleAtendimentoChange = (selectedOption: string) => {
    setHasAtendimento(selectedOption === 'Sim, possui atendimento terapêutico');
    handleInputChange("possuiterapia", selectedOption);
  };

  const handleNext = () => {
    updateMaisInfo(Step3);
    nextStep();
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 lg:w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Mais informações</h4>
          <button onClick={reveal}>reveal</button>
          <button onClick={handleTest}>teste</button>

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              className='md:1/2'
              options={["Sim, possui NIS", "Não possui NIS"]}
              placeholder={"Possui NIS?"}
              onChange={handleNISChange}
            />
            <TextInput
              placeholder="Número NIS"
              className={`transition-opacity md:1/2 duration-300 ${hasNIS ? 'opacity-100' : 'opacity-40'} ${hasNIS ? '' : 'cursor-not-allowed'}`}
              disabled={!hasNIS}
              style={{ pointerEvents: hasNIS ? 'auto' : 'none' }}
              value={Step3.numeronis} onChange={(e) => handleInputChange("numeronis", e.target.value)}
            />
          </div>

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              className='md:w-1/3'
              options={["Sim, recebe BPC", "Não recebe BPC"]}
              placeholder={"Recebe BPC?"}
              onChange={(value) => handleInputChange("bpc", value)}
            />
            <SelectInput
              className='md:w-1/3'
              options={["Sim, recebe Bolsa Família", "Não recebe Bolsa Família"]}
              placeholder={"Recebe Bolsa Família?"}
              onChange={(value) => handleInputChange("bolsafamilia", value)}
            />
            <SelectInput
              className='md:w-1/3'
              options={["Sim, tem carteira CIPTEA", "Não tem carteira CIPTEA"]}
              placeholder={"Tem carteira CIPTEA?"}
              onChange={(value) => handleInputChange("ciptea", value)}
            />
          </div>

          <CheckInput
            options={["Municipal", "Intermunicipal", "Interestadual", "Nenhum"]}
            title={"Tem Passe Livre?"}
            onChange={handlePasseLivreChange}
          />

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              className='md:w-1/2'
              options={["Sim, possui atendimento terapêutico", "Não possui atendimento terapêutico"]}
              placeholder={"Possui atendimento terapêutico?"}
              onChange={handleAtendimentoChange}
            />
            <TextInput
              placeholder={"Qual atendimento?"}
              className={`transition-opacity md:w-1/2 duration-300 w-full ${hasAtendimento ? 'opacity-100' : 'opacity-40'} ${hasAtendimento ? '' : 'cursor-not-allowed'}`}
              disabled={!hasAtendimento}
              style={{ pointerEvents: hasAtendimento ? 'auto' : 'none' }}
              value={Step3.qualterapia} onChange={(e) => handleInputChange("qualterapia", e.target.value)}
            />
          </div>

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <TextInput
              placeholder="Endereço do atendimento terapêutico"
              className={`transition-opacity md:w-1/2 duration-300 w-full ${hasAtendimento ? 'opacity-100' : 'opacity-40'} ${hasAtendimento ? '' : 'cursor-not-allowed'}`}
              disabled={!hasAtendimento}
              style={{ pointerEvents: hasAtendimento ? 'auto' : 'none' }}
              value={Step3.enderecoterapia} onChange={(e) => handleInputChange("enderecoterapia", e.target.value)}
            />
            <TextInput className='md:w-1/2' placeholder="Renda familiar" value={Step3.renda} onChange={(e) => handleInputChange("renda", e.target.value)} />
          </div>

          <CheckInput
            options={["Pai", "Mãe", "Avô", "Avó", "Tio", "Tia"]}
            title={"Quem mora na casa com a criança?"}
            onChange={handleMoradorChange}
          />

          {selectedCheckboxOptions.map((responsavel, index) => (
            <div key={index} className='flex flex-col gap-[12px] mt-4'>
              <h4 className='pl-2'>Informações {responsavel}</h4>

              <TextInput placeholder="Nome completo" />

              <div className='flex flex-col md:flex-row w-full gap-[12px]'>
                <DateInput />
                <TextInput placeholder='RG' className='md:w-1/3' />
                <TextInput placeholder='CPF' className='md:w-1/3' />
              </div>

              <div className='flex flex-col md:flex-row w-full gap-[12px]'>
                <SelectInput
                  className='md:w-1/3'
                  placeholder={"Escolaridade"}
                  options={["Ensino fundamental incompleto", "Ensino fundamental completo", "Ensino médio completo", "Técnico/profissionalizante", "Cursando ensino superior", "Ensino superior completo"]}
                />
                <NumberInput className='md:w-1/3' placeholder="Telefone de contato" />
                <TextInput className='md:w-1/3' placeholder="E-mail" />
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

        <button onClick={handleNext} className='botao'>Próxima página</button>
      </div>
    </div>
  );
};

export default Step3;
