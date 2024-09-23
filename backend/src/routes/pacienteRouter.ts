import { Router } from 'express';
import cors from 'cors';
import { createPaciente, getPaciente } from '../controllers/pacienteControllers';
import { PacienteCreateInputSchema } from '../../prisma/generated/zod/validateSchema';
import { validate} from '../middleware/validate';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', validate(PacienteCreateInputSchema),createPaciente);
pacienteRouter.get('/:cpf', getPaciente);
pacienteRouter.post('/login');