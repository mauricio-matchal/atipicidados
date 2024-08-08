import { Router } from 'express';
import cors from 'cors';
import { createUserGerente } from '../controllers/gerenteController';

export const gerentesRouter = Router();
gerentesRouter.use(cors());
gerentesRouter.post('/', createUserGerente);
