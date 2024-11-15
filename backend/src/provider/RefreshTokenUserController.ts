



import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";

const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

export async function refreshTokenController(request: Request, response: Response) {
    const { refresh_token } = request.body;

    try {
        const result = await refreshTokenUserUseCase.execute(refresh_token);

        return response.status(200).json(result);
    } catch (error: any) {
        return response.status(401).json({ error: true, message: error.message });
    }
}
