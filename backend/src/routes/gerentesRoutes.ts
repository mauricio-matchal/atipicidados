
import { Router } from 'express';
import cors from 'cors';
import { ChangePasswordForModel, createUserGerente, gerenteLogin, getGerente, getGerentes, getUserGerente, getUserGerenteId } from '../controllers/gerenteController';
import { validate } from '../middleware/validate';
import GerenteCreateInputSchema from './../../prisma/validateSchema';
import { sendPassword } from '../email/sendPasswordByEmailGerente';
import { ensureAuthenticated } from '../middleware/ensureAuthenticate.ts/autheticate';
import { refreshTokenController } from '../provider/RefreshTokenUserController';

export const gerentesRouter = Router();
// Validação usando Zod antes de criar um gerente
gerentesRouter.post('/', validate(GerenteCreateInputSchema), createUserGerente);
gerentesRouter.post('/buscar', ensureAuthenticated, getUserGerente);
gerentesRouter.post('/senha', ensureAuthenticated, sendPassword);
gerentesRouter.post('/login', gerenteLogin);
gerentesRouter.get('/cpf/:cpf', ensureAuthenticated, getGerente);
gerentesRouter.get('/id/:id', ensureAuthenticated, getUserGerenteId);
gerentesRouter.get('/getall', ensureAuthenticated, getGerentes);
gerentesRouter.post('/id/:id/changePassword', ensureAuthenticated, ChangePasswordForModel)
//gerentesRouter.post('/token', refreshTokenController )


export default gerentesRouter;
