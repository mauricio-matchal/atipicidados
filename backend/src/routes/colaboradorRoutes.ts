import { Router } from 'express';
import cors from 'cors';
import { createUserColaborador, getUserColaborador, colaboradorLogin, getColaborador, getuserColaboradorId, getColaboradores, ChangePasswordByModel } from '../controllers/colaboradorController';
import { sendPassword } from '../email/sendpassowordbyemail';
import { ColaboradorCreateInputSchema } from '../../prisma/generated/zod/validateSchema';
import { validate } from '../middleware/validate';

export const colaboradorRouter = Router();
colaboradorRouter.use(cors());
colaboradorRouter.post('/', createUserColaborador);
colaboradorRouter.get('/buscar', getUserColaborador);
colaboradorRouter.post('/login', colaboradorLogin )
colaboradorRouter.post('/senha',sendPassword )
colaboradorRouter.get('/cpf/:cpf', getColaborador)
colaboradorRouter.get('/id/:id', getuserColaboradorId)
colaboradorRouter.get('/getall', getColaboradores);
colaboradorRouter.post('/id/:id/changePassword', ChangePasswordByModel)


// validate(ColaboradorCreateInputSchema),