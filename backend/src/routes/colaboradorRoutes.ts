import { Router } from 'express';
import cors from 'cors';
import { createUserColaborador, getUserColaborador, colaboradorLogin, getColaborador, getuserColaboradorId } from '../controllers/colaboradorController';
import { sendPassword } from '../email/sendpassowordbyemail';
import { ColaboradorCreateInputSchema } from '../../prisma/generated/zod/validateSchema';
import { validate } from '../middleware/validate';

export const colaboradorRouter = Router();
colaboradorRouter.use(cors());
colaboradorRouter.post('/', createUserColaborador);
colaboradorRouter.get('/buscar', getUserColaborador);
colaboradorRouter.post('/login', colaboradorLogin )
colaboradorRouter.post('/senha',sendPassword )
colaboradorRouter.get('/:cpf', getColaborador)
colaboradorRouter.get('/id/:id', getuserColaboradorId)

// validate(ColaboradorCreateInputSchema),