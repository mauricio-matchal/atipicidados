import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createUserGerente = async (request: Request, response: Response) => {
    const {nome, email, telefone} = request.body;

    try{
        const userGerente = await prisma.gerente.create({
            data:{
                nome,
                email,
                telefone
            }
        });
        return response.json(userGerente);
    }
    catch(error:any){
        return response.status(400).json({error:error.message});
    }
}


        
