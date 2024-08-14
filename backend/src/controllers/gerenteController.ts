import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { gerentesRouter } from '../routes/gerentesRoutes';

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
export const getUserGerente = async (request: Request, response: Response) => {
    const { email } = request.body;

    if (!email) {
        return response.status(400).json({ error: "O campo email é obrigatório." });
    }

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { email }
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }

        return response.status(200).json(userGerente);
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}  

export const getUserGerenteId = async (request: Request, response: Response) => {
    const { id } = request.params; 

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { id: Number(id) }
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }

        return response.status(200).json(userGerente);
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}




