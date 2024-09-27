
import { Router } from 'express';
import cors from 'cors';
import { createUserGerente, gerenteLogin, getGerente, getGerentes, getUserGerente, getUserGerenteId } from '../controllers/gerenteController';
import { validate } from '../middleware/validate';
import GerenteCreateInputSchema from './../../prisma/validateSchema';
import { sendPassword } from '../email/sendpassowordbyemail';

export const gerentesRouter = Router();
gerentesRouter.use(cors());

// Validação usando Zod antes de criar um gerente
gerentesRouter.post('/', validate(GerenteCreateInputSchema), createUserGerente);
gerentesRouter.post('/buscar', getUserGerente);
gerentesRouter.post('/senha', sendPassword);
gerentesRouter.post('/login', gerenteLogin);
gerentesRouter.get('/cpf/:cpf', getGerente);
gerentesRouter.get('/id/:id', getUserGerenteId);
gerentesRouter.get('/getall', getGerentes);


export default gerentesRouter;
