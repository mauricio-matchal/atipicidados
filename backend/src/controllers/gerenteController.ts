import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';
import { GenerateRefreshToken } from '../provider/gerenateRefreshToken';
import speakeasy from 'speakeasy';

const prisma = new PrismaClient();

// Quando criar gerente, sempre usar o id 0 para unidades. 
export const createUserGerente = async (request: Request, response: Response) => {
    const { nome, email, cpf, rg, telefone, raca, password } = request.body;

    try {
        const twoFASecret = speakeasy.generateSecret();
        

        const userGerente = await prisma.gerente.create({
            data: {
                nome,
                email,
                telefone,
                cpf,
                raca,
                rg,
                password: hashSync(password, 10),
                twoFAEnable: false,
                twoFASecret:twoFASecret.base32
            },
        });

        return response.json({
            gerente: userGerente,
            qrCodeUrl: twoFASecret.base32,
        });
    } catch (error: any) {
        return response.status(400).json({ error: error.message });
    }
};

export const getUserGerente = async (request: Request, response: Response) => {
    const { email } = request.body;

    if (!email) {
        return response.status(400).json({ error: "O campo email é obrigatório." });
    }

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { email },
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }

        return response.status(200).json({ gerente: userGerente, codigo: userGerente.twoFASecret });
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
};

export const getUserGerenteId = async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { id }, 
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }

        if (userGerente.twoFASecret) {
            const qrCodeUrl = speakeasy.otpauthURL({
                secret: userGerente.twoFASecret,
                label: `${userGerente.email}`,
                issuer:"Meu App"
            });

            return response.status(200).json({
                gerente: userGerente,
                qrCodeUrl,
            });
        }

        return response.status(200).json(userGerente);
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
};

export const gerenteLogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { email },
        });

        if (!userGerente) {
            return response.status(404).json({ error: 'Email não encontrado' });
        }

        const isPasswordValid = await compare(password, userGerente.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta',
            });
        }

        const token = jwt.sign({ userId: userGerente.id }, JWT_SECRET, {
            expiresIn: '10s',
        });

        response.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            path: '/',
        });

        const generateRefreshToken = new GenerateRefreshToken();
        const refresh_token = await generateRefreshToken.execute(userGerente.id);

        response.cookie('refresh_token', refresh_token.id, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        });

        return response.status(200).json({
            error: false,
            message: 'Login realizado',
            gerente: {
                id: userGerente.id,
            },
        });
    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor',
        });
    }
};

export const getGerente = async (request: Request, response: Response) => {
    const { cpf } = request.params;

    if (!cpf) {
        return response.status(400).json({ error: "O campo CPF é obrigatório." });
    }

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { cpf },
        });

        if (!userGerente) {
            return response.status(404).json({ error: `O gerente de ${cpf} não foi encontrado ` });
        }

        return response.status(200).json({
            error: false,
            message: `O gerente ${userGerente.nome} foi encontrado`,
            userGerente,
        });
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
};

export const getGerentes = async (_: Request, response: Response) => {
    try {
        const gerentes = await prisma.gerente.findMany();
        if (gerentes.length === 0) {
            return response.status(204).json({ error: true, message: 'Nenhum gerente foi encontrado' });
        }
        return response.status(200).json({
            error: false,
            message: 'Segue a lista de todos gerentes',
            gerentes,
        });
    } catch (error: any) {
        return response.status(500).json({ error: true, message: 'Erro interno no servidor' });
    }
};

export const ChangePasswordForModel = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { oldPassword, newPassword } = request.body;

    try {
        const gerente = await prisma.gerente.findUnique({
            where: { id }, 
        });

        if (!gerente) {
            return response.status(404).json({
                error: true,
                message: 'Erro: Gerente não encontrado',
            });
        }

        const isPasswordValid = await compare(oldPassword, gerente.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta',
            });
        }

        await prisma.gerente.update({
            where: { id },
            data: {
                password: hashSync(newPassword, 10),
            },
        });

        return response.status(200).json({
            success: true,
            message: 'Senha alterada com sucesso',
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: true,
            message: 'Ocorreu um erro',
        });
    }
};

export const verifyTwoFACode = async (request: Request, response: Response) => {
    const { code } = request.body;
    const { id } = request.params;

    if (!code || !id) {
        return response.status(400).json({ error: 'Código ou ID do usuário faltando.' });
    }

    try {
        const user = await prisma.gerente.findUnique({
            where: { id },
        });

        if (!user || !user.twoFASecret) {
            return response.status(404).json({ error: 'Usuário não encontrado ou 2FA não configurado.' });
        }

        const isValid = speakeasy.totp.verify({
            secret: user.twoFASecret,
            encoding: 'base32',
            token: code,
            window: 1000,
        });

        if (isValid) {
            return response.json({ success: true });
        } else {
            return response.status(400).json({ success: false, error: 'Código inválido.' });
        }
    } catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
};
