import { Router } from 'express';
import cors from 'cors';
import { createUserPaciente} from '../controllers/pacienteControllers';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createUserPaciente);

