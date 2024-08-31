import { Router } from 'express';
import cors from 'cors';
import { createUserGerente, getUserGerente, getUserGerenteId, gerenteLogin } from '../controllers/gerenteController';
import { sendPassword } from '../email/sendpassowordbyemail';

export const gerentesRouter = Router();
gerentesRouter.use(cors());
gerentesRouter.post('/', createUserGerente);
gerentesRouter.post('/buscar', getUserGerente);
gerentesRouter.get('/:id', getUserGerenteId);
gerentesRouter.post('/login', gerenteLogin )
gerentesRouter.post('/senha',sendPassword )

