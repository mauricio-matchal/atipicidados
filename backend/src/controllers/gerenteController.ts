import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';
import multer from 'multer';
import multer from 'multer';

const prisma = new PrismaClient();

// Configuração do multer para salvar os arquivos em uma pasta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Quando criar gerente, sempre usar o id 0 para unidades. 
//criar 
export const createUserGerente =
    [
        upload.fields([
            { name: 'rgdocfile', maxCount: 1 },
            { name: 'fotofile', maxCount: 1 },
            { name: 'compresfile', maxCount: 1 },
        ]),

        async (req: Request, response: Response) => {
            const { nome, email, cpf, rg, telefone, raca, unidadeId, password, nascimento, genero, unidade } = req.body;
            const files = req.files as { [fieldname: string]: Express.Multer.File[] };
            console.log(req.files);

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
                        nascimento,
                        genero,
                        unidade,
                        password: hashSync(password, 10),
                        rgdocfile: files?.['rgdocfile'] ? files['rgdocfile'][0].path : null,
                        fotofile: files?.['fotofile'] ? files['fotofile'][0].path : null,
                        compresfile: files?.['compresfile'] ? files['compresfile'][0].path : null
                    }
                });
                return response.json(userGerente);
            } catch (error: any) {
                return response.status(400).json({ error: error.message });
            }
        }
    ]

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

export const getGerente = async (request: Request, response: Response) => {
    const { cpf } = request.params;

    if (!cpf) {
        return response.status(400).json({ error: "O campo CPF é obrigatório." });
    }

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { cpf: cpf }
        });

        if (!userGerente) {
            return response.status(404).json({ error: `O gerente de ${cpf} não foi encontrado ` });
        }

        return response.status(200).json({
            error: false,
            message: `O colaborador ${userGerente.nome} foi encontrado`,
            userGerente
        });

    }
    catch (error: any) {
        return response.status(500).json({ error: error.message });
    }
}

export const getGerentes = async (_: Request, response: Response) => {

    try {
        const gerentes = await prisma.gerente.findMany();
        if (gerentes.length === 0) {
            return response.status(204).json({ error: true, message: 'Nenhum gerente foi encontrado' })
        }
        return response.status(200).json({
            error: false,
            message: 'Segue a lista de todos gerentes',
            gerentes
        })


    }
    catch (error: any) {
        return response.status(500).json({ error: true, message: 'Erro interno no servidor' })
    }
}