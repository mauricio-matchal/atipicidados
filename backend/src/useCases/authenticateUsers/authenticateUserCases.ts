import { PrismaClient } from "@prisma/client";
import { response } from "express";
import { Interface } from "readline";

const prisma = new PrismaClient()
interface IRequest {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({email, password}:IRequest){
        const userAlreadyExist = await prisma.gerente.findUnique({
            where: {email}
        })
        if (userAlreadyExist) {
            return response.status(500).json({error: true, message:'Usuário ou senha incorretos'})

        }

    }

}