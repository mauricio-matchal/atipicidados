import {Router, Request, Response} from 'express';
import cors from 'cors'
import { gerentesRouter } from './gerentesRoutes';
import {unidadeRouter} from './unidadeRouter';
import {pacienteRouter} from './pacienteRouter';


export const userRouter = Router();
userRouter.use(cors());
userRouter.use('/gerentes', gerentesRouter)
userRouter.use('/unidades', unidadeRouter)
userRouter.use('/pacientes', pacienteRouter)
//Demais rotas que faremos


