import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../secrets";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const token = request.cookies.token;
    console.log(request.cookies)
    
    if (!token) {
        
        return response.status(401).json({ message: "Unauthorized - No token provided" });
    }
    try {
        console.log('hora do jwt', Date.now())
        console.log('hora do servidor', new Date())

        verify(token, JWT_SECRET);


        return next();
    } catch (error) {
        console.log(error)
        return response.status(401).json({ message: "Unauthorized - Invalid token" });
    
    }
}
