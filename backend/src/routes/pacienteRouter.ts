import { Router } from 'express';
import cors from 'cors';
import { createPaciente, getPaciente, getPacientes, getuserPacienteId, pacienteLogin, updateAnalise, updatePacienteAutonomia, updatePacienteComportamento, updatePacienteCompres, updatePacienteDesenvolvimento, updatePacienteEscola, updatePacienteFoto, updatePacienteGeral, updatePacienteGestacao, updatePacienteLaudo, updatePacienteMae, updatePacienteMaisinfo, updatePacienteNascimento, updatePacientePai, updatePacientePedagogico, updatePacienteRelescolar, updatePacienteRg, updatePacienteSaude } from '../controllers/pacienteControllers';
import { PacienteCreateInputSchema } from '../../prisma/generated/validateSchema';
import { validate } from '../middleware/validate';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createPaciente);
pacienteRouter.get('/cpf/:cpf', getPaciente);
pacienteRouter.post('/login', pacienteLogin);
pacienteRouter.get('/id/:id', getuserPacienteId);
pacienteRouter.get('/getall', getPacientes);

pacienteRouter.put('/putgeral', updatePacienteGeral);
pacienteRouter.put('/putmae', updatePacienteMae);
pacienteRouter.put('/putpai', updatePacientePai);
pacienteRouter.put('/putescola', updatePacienteEscola);
pacienteRouter.put('/putsaude', updatePacienteSaude);
pacienteRouter.put('/putmaisinfo', updatePacienteMaisinfo);

pacienteRouter.put('/putrg', updatePacienteRg);
pacienteRouter.put('/putfoto', updatePacienteFoto);
pacienteRouter.put('/putcompres', updatePacienteCompres);
pacienteRouter.put('/putlaudo', updatePacienteLaudo);
pacienteRouter.put('/putrelescolar', updatePacienteRelescolar);

pacienteRouter.put('/putgestao', updatePacienteGestacao);
pacienteRouter.put('/putnascimento', updatePacienteNascimento);
pacienteRouter.put('/putautonomia', updatePacienteAutonomia);
pacienteRouter.put('/putcomportamento', updatePacienteComportamento);
pacienteRouter.put('/putdesenvolvimento', updatePacienteDesenvolvimento);
pacienteRouter.put('/putpedagogico', updatePacientePedagogico);


pacienteRouter.put('/putanalise', updateAnalise);

// , validate(PacienteCreateInputSchema)





pacienteRouter.put('/putAnalise', updateAnalise);
