import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';




const prisma = new PrismaClient();

import multer from 'multer';
import path from 'path';

// Configurar o destino e nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // pasta onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // nome do arquivo
    }
});

// Inicializar o multer com a configuração de armazenamento
const upload = multer({ storage: storage });



export const createUserPaciente = async (req: Request, res: Response) => {
    // Use upload.fields para lidar com múltiplos arquivos de diferentes campos
    const uploadHandler = upload.fields([
        { name: 'rgdocfile', maxCount: 1 },
        { name: 'fotofile', maxCount: 1 },
        { name: 'laudofile', maxCount: 1 },
        { name: 'relescolar', maxCount: 1 }
    ]);

    uploadHandler(req, res, async function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        // Agora você pode acessar os arquivos recebidos através de req.files
        const rgdocfile = req.files?.['rgdocfile']?.[0].path;
        const fotofile = req.files?.['fotofile']?.[0].path;
        const laudofile = req.files?.['laudofile']?.[0].path;
        const relescolar = req.files?.['relescolar']?.[0].path;

        // Acessa outros dados do corpo da requisição
        const { geral, pai, mae, maisinfo, escola, saudeinfo } = req.body;

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
    });
};