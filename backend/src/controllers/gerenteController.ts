import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';

const prisma = new PrismaClient();

// Quando criar gerente, sempre usar o id 0 para unidades. 
//criar 
export const createUserGerente = async (request: Request, response: Response) => {
    const { nome, email, cpf, rg, telefone, raca, unidadeId, password } = request.body;

    try {
        const userGerente = await prisma.gerente.create({
            data: {
                nome,
                email,
                telefone,
                cpf,
                unidadeId,
                raca,
                rg,
                password: hashSync(password, 10)
            }
        });
        return response.json(userGerente);
    } catch (error: any) {
        return response.status(400).json({ error: error.message });
    }
}

//encontrar por email
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

//encontrar por id
export const getUserGerenteId = async (request: Request, response: Response) => {
    const { id } = request.params

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

//login
export const gerenteLogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { email }
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Email não encontrado" });
        }

        const isPasswordValid = await compare(password, userGerente.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }

        const token = jwt.sign({
            userId: userGerente.id
        }, JWT_SECRET);

        return response.status(200).json({
            error: false,
            message: 'Login realizado',
            token,
            gerente: {
                id: userGerente.id,
            }
        });
    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor'
        });
    }
}


//encontrar por cpf
//econtrar por nome
//editar
//deletar
//inativar - criar atributo que represente se o gerente está ativo no projeto 
