import { Router } from 'express';
import cors from 'cors';
import { createUserPaciente, pacienteLogin} from '../controllers/pacienteControllers';
import { sendPassword } from '../email/sendpassowordbyemail';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createUserPaciente);
pacienteRouter.post('/login', pacienteLogin);
pacienteRouter.post('/senha',sendPassword )

