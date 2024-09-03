import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';



const prisma = new PrismaClient();

export const createUserUnidade = async (request: Request, response: Response) => {
    const {nome, endereco} = request.body;

    try{
        const userUnidade = await prisma.unidade.create({
            data:{
                nome,
                endereco
            }
        });
        return response.json(userUnidade);
    }
    catch(error:any){
        return response.status(400).json({error:error.message});
    }


    
}

export const addGerenteToUnidade = async(request: Request, response: Response) => {
    const {gerenteId, unidadeId} = request.body;
    try{
        const unidade = await prisma.unidade.findUnique({
            where: {id: unidadeId},
        });
        const gerente = await prisma.gerente.update({
            where: {id: gerenteId},
            data: {
                unidade: {
                    connect:{id: unidadeId},
                },
            },
        });   
        return response.json(gerente);

    } catch (error:any){
        return response.status(400).json({error: error.message});
    }
    }

