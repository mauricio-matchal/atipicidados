import { Request, Response } from 'express';
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase';
import dayjs from 'dayjs';

const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

export async function refreshTokenController(request: Request, response: Response) {
    const refresh_token = request.cookies?.refresh_token; 

    if (!refresh_token) {
        return response.status(401).json({ error: true, message: 'Refresh token não encontrado' });
    }

    try {
        const { token, newExpireIn } = await refreshTokenUserUseCase.execute(refresh_token);

        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure:false, 
            sameSite: 'lax',
            maxAge: (newExpireIn - dayjs().unix()) * 1000, 
        });

        response.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            path: '/',
        });

        return response.status(200).json({ error: false, message: 'Token renovado', refresh_token, token });
    } catch (error: any) {
        return response.status(401).json({ error: true, message: error.message });
    }
}
