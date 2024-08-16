import { Router } from 'express';
import cors from 'cors';
import { createUserGerente, getUserGerente, getUserGerenteId } from '../controllers/gerenteController';

export const gerentesRouter = Router();
gerentesRouter.use(cors());
gerentesRouter.post('/', createUserGerente);
gerentesRouter.post('/buscar', getUserGerente);
gerentesRouter.get('/:id', getUserGerenteId);

