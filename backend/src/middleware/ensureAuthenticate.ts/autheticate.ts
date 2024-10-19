import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../secrets";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Pega o token diretamente do cookie 'token'
    const token = request.cookies.token;

    // Verifica se o token existe no cookie
    if (!token) {
        return response.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        verify(token, JWT_SECRET);


        return next();
    } catch (error) {
        return response.status(401).json({ message: "Unauthorized - Invalid token" });
    }
}
