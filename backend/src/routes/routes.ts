import {Router, Request, Response} from 'express';
import cors from 'cors'
import { gerentesRouter } from './gerentesRoutes';


export const userRouter = Router();
userRouter.use(cors());
userRouter.use('/gerentes', gerentesRouter)
//Demais rotas que faremos