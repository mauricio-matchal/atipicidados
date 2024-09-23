import { Router } from 'express';
import cors from 'cors';
import { createPaciente, getPaciente, getuserPacienteId, pacienteLogin } from '../controllers/pacienteControllers';
import { PacienteCreateInputSchema } from '../../prisma/generated/zod/validateSchema';
import { validate} from '../middleware/validate';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createPaciente);
pacienteRouter.get('/:cpf', getPaciente);
pacienteRouter.post('/login', pacienteLogin);
pacienteRouter.get('/id/:id', getuserPacienteId)

// validate(PacienteCreateInputSchema),