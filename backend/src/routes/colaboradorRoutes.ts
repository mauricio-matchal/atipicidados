import { Router } from 'express';
import cors from 'cors';
import { createUserColaborador, getUserColaborador, colaboradorLogin, getColaborador, getuserColaboradorId, getColaboradores } from '../controllers/colaboradorController';
import { sendPassword } from '../email/sendPasswordByEmailColaborador';
import { validate } from '../middleware/validate';
import { ensureAuthenticated } from '../middleware/ensureAuthenticate.ts/autheticate';

export const colaboradorRouter = Router();
colaboradorRouter.post('/', createUserColaborador);
colaboradorRouter.get('/buscar', getUserColaborador);
colaboradorRouter.post('/login', colaboradorLogin )
colaboradorRouter.post('/senha',sendPassword )
colaboradorRouter.get('/cpf/:cpf', getColaborador)
colaboradorRouter.get('/id/:id', getuserColaboradorId)
colaboradorRouter.get('/getall', getColaboradores);


// validate(ColaboradorCreateInputSchema),