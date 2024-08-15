import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const prisma = new PrismaClient();

//considerar 0 como valor default para unidade id

export const createUserPaciente = async (request: Request, response: Response) => {
    const {analise, nome, cpf, rg, nomemae, nomepai, unidadeId, raca, email, telefone} = request.body;

    try{
        const userPaciente = await prisma.paciente.create({
            data:{
                analise,
                nome, 
                cpf, 
                rg, 
                nomemae, 
                nomepai,
                unidadeId, 
                raca,
                email, 
                telefone
            }
        });
        return response.json(userPaciente);
    }
    catch(error:any){
        return response.status(400).json({error:error.message});
    }   
}

