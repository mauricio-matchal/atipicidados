import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import jwt from 'jsonwebtoken';
import  { compare, hashSync } from 'bcryptjs';
import { JWT_SECRET } from '../secrets';


const prisma = new PrismaClient();

//considerar 0 como valor default para unidade id

// export const createPacienteAnalise = async(request: Request, response: Response) => {
//     const {geral, escola, mae, pai, maisinfo, saudeinfo} =  request.body;

//     try {
//         const userPaciente = await prisma.pacienteanalise
//     }

// }

export const createUserPaciente = async (request: Request, response: Response) => {
    const {geral, pai, mae, maisinfo, escola, saudeinfo, fotofile, laudofile, relescolar, } =  request.body;

            try {
                const userPaciente = await prisma.paciente.create({
                    data: {
                        geral,
                        pai,
                        mae,
                        maisinfo,
                        escola,
                        saudeinfo,
                        rgdocfile,
                        fotofile,
                        laudofile,
                        relescolar
                    }
                });

                return res.json(userPaciente);
            } catch (error: any) {
                return res.status(400).json({ error: error.message });
            }
        } else {
            return res.status(400).json({ error: "Nenhum arquivo foi enviado ou o formato é inválido." });
        }
    });
};


export const pacienteLogin = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    try {
        const userPaciente = await prisma.paciente.findUnique({
            where: {email},
        });

        if (!userPaciente || !userPaciente.password) {
            return response.status(404).json({ error: "Email não encontrado" });
        }

        const isPasswordValid = await compare(password, userPaciente.password);
        if (!isPasswordValid ) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }

        const token = jwt.sign({
            userId: userPaciente.id
        }, JWT_SECRET);

        return response.json({
            error: false,
            message: 'Login realizado',
            token,
            paciente: {
                id: userPaciente.id,
            }
        });
    } catch (error: any) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor'
        });
    }
}
