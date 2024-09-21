
import { Router } from 'express';
import cors from 'cors';
import { createUserGerente, gerenteLogin, getGerente, getUserGerente, getUserGerenteId } from '../controllers/gerenteController';
import { validateGerente } from './../middleware/validateGerente';
import GerenteCreateInputSchema from './../../prisma/generated/zod/validateSchema';
import { sendPassword } from '../email/sendpassowordbyemail';

export const gerentesRouter = Router();
gerentesRouter.use(cors());

// Validação usando Zod antes de criar um gerente
gerentesRouter.post('/', validateGerente(GerenteCreateInputSchema), createUserGerente);
gerentesRouter.post('/buscar', getUserGerente);
gerentesRouter.post('/senha', sendPassword);
gerentesRouter.post('/login', gerenteLogin);
gerentesRouter.get('/:cpf', getGerente);



export default gerentesRouter;
