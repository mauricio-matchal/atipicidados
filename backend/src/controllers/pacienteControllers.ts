import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';


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
