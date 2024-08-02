import {Router, Request, Response} from 'express';
import cors from 'cors'
import { createUserGerente } from '../controllers/gerenteController';


export const gerenteRouter = Router();
gerenteRouter.use(cors());
gerenteRouter.post('/gerentes', createUserGerente)
//Demais rotas que faremos