import { Router } from 'express';
import cors from 'cors';
import { createUserColaborador, getUserColaborador, colaboradorLogin } from '../controllers/colaboradorController';
import { sendPassword } from '../email/sendpassowordbyemail';

export const colaboradorRouter = Router();
colaboradorRouter.use(cors());
colaboradorRouter.post('/', createUserColaborador);
colaboradorRouter.get('/buscar', getUserColaborador);
colaboradorRouter.post('/login', colaboradorLogin )
colaboradorRouter.post('/senha',sendPassword )

