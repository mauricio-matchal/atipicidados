import {Router, Request, Response} from 'express';
import cors from 'cors'
import { gerentesRouter } from './gerentesRoutes';
import {unidadeRouter} from './unidadeRouter';


export const userRouter = Router();
userRouter.use(cors());
userRouter.use('/gerentes', gerentesRouter)
userRouter.use('/unidades', unidadeRouter)
//Demais rotas que faremos