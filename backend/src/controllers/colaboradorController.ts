import { PrismaClient } from '@prisma/client';
import { Request, response, Response } from 'express';
import jwt from 'jsonwebtoken';
import  { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';
import { request } from 'http';
import { error } from 'console';
import { request } from 'http';
import { error } from 'console';

const prisma = new PrismaClient();

// Quando criar colaborador, sempre usar o id 0 pra unidades. 
//criar 
export const createUserColaborador = async (request: Request, response: Response) => {
    const { nome, email, cpf, rg, telefone, raca, unidadeId, password, nascimento, titulo, formacao, genero} = request.body;
    
    try {
        const userColaborador = await prisma.colaborador.create({
            data: {
                nome,
                email,
                telefone,
                cpf,
                unidadeId,
                raca,
                rg,
                password: hashSync(password, 10),
                nascimento,
                titulo,
                formacao,
                genero

            }
        });
        return response.json(userColaborador);
    } catch (error: any) {
        return response.status(400).json({ error: error.message });
    }
}


//encontrar por email
export const getUserColaborador = async (request: Request, response: Response) => {
    const { email } = request.body;

    if (!email) {
        return response.status(400).json({ error: "O campo email é obrigatório." });
    }

    try {
        const userColaborador = await prisma.colaborador.findUnique({
            where: { email }
        });

        if (!userColaborador) {
            return response.status(404).json({ error: "colaborador não encontrado." });
        }

        return response.status(200).json(userColaborador);
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}

//encontrar por id
export const getuserColaboradorId = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const userColaborador = await prisma.colaborador.findUnique({
            where: { id: Number(id) }
        });

        if (!userColaborador) {
            return response.status(404).json({ error: "colaborador não encontrado." });
        }

        return response.status(200).json(userColaborador);
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}

//login
export const colaboradorLogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const userColaborador = await prisma.colaborador.findUnique({
            where: { email }
        });

        if (!userColaborador) {
            return response.status(404).json({ error: "Email não encontrado" });
        }

        const isPasswordValid = await compare(password, userColaborador.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }

        const token = jwt.sign({
            userId: userColaborador.id
        }, JWT_SECRET);

        return response.status(200).json({
        return response.status(200).json({
            error: false,
            message: 'Login realizado',
            token,
            gerente: {
                id: userColaborador.id,
            }
        });
    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor'
        });
    }
}


export const getColaborador = async (request: Request, response: Response) => {
    const { cpf } = request.params; 

    try {
        const userColaborador = await prisma.colaborador.findFirst({
            where: {
                cpf: cpf 
            }
        });

        if (userColaborador) {
            return response.status(200).json({
                error: false,
                message: `O colaborador ${userColaborador.nome} foi encontrado`,
                userColaborador
            });
        }

        return response.status(404).json({
            message: `O colaborador com o CPF ${cpf} não foi encontrado`
        });

    } catch (error: any) {
        return response.status(500).json({
            message: "Erro no servidor",
            error:error.message
        });
    }
};

export const getColaboradores = async (_:Request, response:Response) => {

    try{
        const colaboradores = await prisma.colaborador.findMany();
        if (colaboradores.length === 0) {
            return response.status(204).json({error:true, message: 'Nenhum colaborador foi encontrado'})
        }
        return response.status(200).json({error:false, 
            message: 'Segue a lista de todos colaboradores',
            colaboradores})


    }
    catch(error:any){
        return response.status(500).json({error:true, message:'Erro interno no servidor'})
    }
}


export const ChangePasswordByModel = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { oldPassword, newPassword } = request.body;

    try {
        const colaborador = await prisma.colaborador.findUnique({
            where: { id: Number(id) }
        });

        if (!colaborador) {
            return response.status(404).json({
                error: true,
                message: 'Erro: Colaborador não encontrado'
            });
        }

        const isPasswordValid = await compare(oldPassword, colaborador.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }

        await prisma.colaborador.update({
            where: { id: Number(id) }, 
            data: {
                password: hashSync(newPassword,10) 
            }
        });

        return response.status(200).json({
            success: true,
            message: 'Senha alterada com sucesso'
        });
        
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: true,
            message: 'Erro ao alterar a senha'
        });
    }
};
