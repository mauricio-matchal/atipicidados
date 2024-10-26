import { Router } from 'express';
import cors from 'cors';
import { createPaciente, getPaciente, updatePacienteGestacao, updatePacienteNascimento, updatePacienteAutonomia,
    updatePacienteComportamento, updatePacienteDesenvolvimento, updatePacientePedagogico, updatePacienteGeral,
    updatePacienteMae, updatePacientePai, updatePacienteMaisinfo, updatePacienteEscola, updatePacienteSaude,
    updatePacienteRg, updatePacienteFoto, updatePacienteCompres, updatePacienteLaudo, updatePacienteRelescolar,
    updateAnalise
 } from '../controllers/pacienteControllers';
import { PacienteCreateInputSchema } from '../../prisma/validateSchema';
import { validate} from '../middleware/validate';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', validate(PacienteCreateInputSchema),createPaciente);
pacienteRouter.get('/:cpf', getPaciente);
pacienteRouter.post('/login');
pacienteRouter.put('/putGestao', updatePacienteGestacao);
pacienteRouter.put('/putNascimento', updatePacienteNascimento);
pacienteRouter.put('/putAutonomia', updatePacienteAutonomia);
pacienteRouter.put('/putComportamento', updatePacienteComportamento);
pacienteRouter.put('/putDesenvolvimento', updatePacienteDesenvolvimento);
pacienteRouter.put('/putPedagogico', updatePacientePedagogico);
pacienteRouter.put('/putGeral', updatePacienteGeral);
pacienteRouter.put('/putMae', updatePacienteMae);
pacienteRouter.put('/putPai', updatePacientePai);
pacienteRouter.put('/putMaisinfo', updatePacienteMaisinfo);
pacienteRouter.put('/putEscola', updatePacienteEscola);
pacienteRouter.put('/putSaude', updatePacienteSaude);
pacienteRouter.put('/putRg', updatePacienteRg);
pacienteRouter.put('/putFoto', updatePacienteFoto);
pacienteRouter.put('/putCompres', updatePacienteCompres);
pacienteRouter.put('/putLaudo', updatePacienteLaudo);
pacienteRouter.put('/putRelescolar', updatePacienteRelescolar);







pacienteRouter.put('/putAnalise', updateAnalise);
