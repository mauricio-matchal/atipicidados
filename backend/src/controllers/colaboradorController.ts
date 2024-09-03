import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';

const prisma = new PrismaClient();

// Quando criar colaborador, sempre usar o id 0 pra unidades. 
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

        return response.json({
            error: false,
            message: 'Login realizado',
            token,
            colaborador: {
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


