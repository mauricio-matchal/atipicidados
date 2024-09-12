import { Router } from 'express';
import cors from 'cors';
import { createPaciente} from '../controllers/pacienteControllers';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createPaciente);

