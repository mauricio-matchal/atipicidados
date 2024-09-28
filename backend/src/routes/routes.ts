import {Router, Request, Response} from 'express';
import cors from 'cors'
import { gerentesRouter } from './gerentesRoutes';
import {unidadeRouter} from './unidadeRouter';
import {pacienteRouter} from './pacienteRouter';
import { colaboradorRouter } from './colaboradorRoutes';


export const userRouter = Router();
userRouter.use(cors());
userRouter.use('/gerentes', gerentesRouter)
userRouter.use('/unidades', unidadeRouter)
userRouter.use('/pacientes', pacienteRouter)
userRouter.use('/colaboradores', colaboradorRouter)

//Demais rotas que faremos


userRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});