import {Router, Request, Response} from 'express';
import cors from 'cors'
import { createUserGerente } from '../controllers/gerenteController';


export const userRouter = Router();
userRouter.use(cors());
//Demais rotas que faremos