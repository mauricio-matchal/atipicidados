import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import dayjs from 'dayjs';

const prisma = new PrismaClient();

class RefreshTokenUserUseCase {
    async execute(refresh_token: string) {
        // Verifica se o refresh token existe
        const refreshToken = await prisma.refreshToken.findFirst({
            where: {
                id : refresh_token
            }
        });

        if (!refreshToken) {
            throw new Error('Invalid refresh token');
        }

        // Verifica se o token expirou
        const isExpired = dayjs().unix() > refreshToken.expireIn;
        if (isExpired) {
            throw new Error('Refresh token expired');
        }

        // Gera um novo token JWT
        const token = jwt.sign(
            { userId: refreshToken.gerenteId },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { token };
    }
}

export { RefreshTokenUserUseCase };
