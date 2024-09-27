import { Router } from 'express';
import cors from 'cors';
import { createUserColaborador, getUserColaborador, colaboradorLogin, getColaborador } from '../controllers/colaboradorController';
import { sendPassword } from '../email/sendpassowordbyemail';
import { ColaboradorCreateInputSchema } from '../../prisma/validateSchema';
import { validate } from '../middleware/validate';

export const colaboradorRouter = Router();
colaboradorRouter.use(cors());
colaboradorRouter.post('/', validate(ColaboradorCreateInputSchema), createUserColaborador);
colaboradorRouter.get('/buscar', getUserColaborador);
colaboradorRouter.post('/login', colaboradorLogin )
colaboradorRouter.post('/senha',sendPassword )
colaboradorRouter.get('/:cpf', getColaborador)

