import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';



const prisma = new PrismaClient();

//criar
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

//adicionar gerente
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
        return response.status(200).json({ 
            error: false,
            message: `O gerente ${gerente.nome} foi conectado a unidade ${unidade?.nome}`,
            gerente});

    } catch (error:any){
        return response.status(400).json({error: error.message});
    }
    }

    export const getUnidadeById = async (request: Request, response: Response) => {
        const { id } = request.params;
    
        try {
            const unidade = await prisma.unidade.findUnique({
                where: { id: Number(id) },
            });
    
            if (!unidade) {
                return response.status(404).json({ error: 'Unidade não encontrada' });
            }
    
            return response.json(unidade);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    };
//editar 
//deletar
//encontrar por id
//encontrar por nome 