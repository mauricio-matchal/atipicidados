import  { Router } from 'express';
import cors from 'cors';
import { ChangePasswordForModel, createPaciente, getPaciente, getPacientes, getuserPacienteId, pacienteLogin } from '../controllers/pacienteControllers';
import { PacienteCreateInputSchema } from '../../prisma/validateSchema';
import { validate} from '../middleware/validate';
import { sendPassword } from '../email/sendPasswordByEmailPaciente';
import { ensureAuthenticated } from '../middleware/ensureAuthenticate.ts/autheticate';

export const pacienteRouter = Router();
pacienteRouter.use(cors());
pacienteRouter.post('/', createPaciente);
pacienteRouter.get('/cpf/:cpf', getPaciente);
pacienteRouter.post('/login', pacienteLogin);
pacienteRouter.get('/id/:id', getuserPacienteId);
pacienteRouter.get('/getall',ensureAuthenticated, getPacientes);
pacienteRouter.post('senha', sendPassword);
pacienteRouter.post('/id/:id/changePassword', ChangePasswordForModel)


// validate(PacienteCreateInputSchema),