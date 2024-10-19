import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';
import { GenerateRefreshToken } from '../provider/gerenateRefreshToken';

const prisma = new PrismaClient();

// Quando criar gerente, sempre usar o id 0 para unidades. 
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
        }, JWT_SECRET, {expiresIn:'1m'});

        response.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            path: '/' // Define o caminho
 
        });
        
        
        
        const generateRefreshToken = new GenerateRefreshToken();
        const refresh_token = await generateRefreshToken.execute(userGerente.id)

        return response.status(200).json({
            error: false,
            message: 'Login realizado',
            token,
            gerente: {
                id: userGerente.id,
                refresh_token
            }
        });
    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor'
        });
    }
}

export const getGerente = async (request: Request, response: Response) => {
    const { cpf } = request.params;

    if (!cpf) {
        return response.status(400).json({ error: "O campo CPF é obrigatório." });
    }

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { cpf: cpf}
        });

        if (!userGerente) {
            return response.status(404).json({ error: `O gerente de ${cpf} não foi encontrado ` });
        }

        return response.status(200).json({
            error: false,
            message: `O gerente ${userGerente.nome} foi encontrado`,
            userGerente
        }); 
    
    } 
    catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}

export const getGerentes = async (_:Request, response:Response) => {

    try{
        const gerentes = await prisma.gerente.findMany();
        if (gerentes.length === 0) {
            return response.status(204).json({error:true, message: 'Nenhum gerente foi encontrado'})
        }
        return response.status(200).json({error:false, 
            message: 'Segue a lista de todos gerentes',
            gerentes})


    }
    catch(error:any){
        return response.status(500).json({error:true, message:'Erro interno no servidor'})
    }
}


export const ChangePasswordForModel = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { oldPassword, newPassword } = request.body;

    try {
        const gerente = await prisma.gerente.findUnique({
            where: { id: Number(id) }
        });

        if (!gerente) {
            return response.status(404).json({
                error: true,
                message: 'Erro: Colaborador não encontrado'
            });
        }

        const isPasswordValid = await compare(oldPassword, gerente.password);
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
            message: 'Ocorreu um erro'
        });
    }
};
