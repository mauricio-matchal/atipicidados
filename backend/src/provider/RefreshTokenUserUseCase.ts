import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

class RefreshTokenUserUseCase {
    async execute(refresh_token: string) {
        const refreshToken = await prisma.refreshToken.findFirst({
            where: {
                id: refresh_token,
            }   
        });

        if (!refreshToken) {
            throw new Error('Invalid refresh token');
        }

        const isExpired = dayjs().unix() > refreshToken.expireIn;
        if (isExpired) {
            throw new Error('Refresh token expired');
        }

        const newExpireIn = dayjs().add(30, 'seconds').unix();
        await prisma.refreshToken.update({
            where: { id: refresh_token },
            data: { expireIn: newExpireIn },
            
        });

        function whichModel( refreshToken: { id: string; expireIn: number; pacienteId: string | null; colaboradorId: string | null; gerenteId: string | null; }){
            if (refreshToken.gerenteId){
                return refreshToken.gerenteId
            }
            else if (refreshToken.colaboradorId){
                return refreshToken.colaboradorId
            }
            else if (refreshToken.pacienteId){
                return refreshToken.pacienteId
            }
            else {
                throw new Error('Nenhum userId válido para o refresh token');
            }

        }
        const userId = whichModel(refreshToken)
        

        const token = jwt.sign(
            { userId: userId},
            JWT_SECRET,
            { expiresIn: '10s' },
        );

        return { token, newExpireIn };
    }
}

export { RefreshTokenUserUseCase };


