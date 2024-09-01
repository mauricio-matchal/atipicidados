import { Router } from 'express';
import cors from 'cors';
import { createUserGerente, getUserGerente, getUserGerenteId, gerenteLogin } from '../controllers/gerenteController';

export const gerentesRouter = Router();
gerentesRouter.use(cors());
gerentesRouter.post('/', createUserGerente);
gerentesRouter.post('/buscar', getUserGerente);
gerentesRouter.get('/:id', getUserGerenteId);
gerentesRouter.post('/login', gerenteLogin )

