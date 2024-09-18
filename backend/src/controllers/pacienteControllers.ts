import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';


const prisma = new PrismaClient();


// Configurar o multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const createUserPaciente = async (req: Request, res: Response) => {
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

        // Verificar se req.files é do tipo esperado
        if (req.files && !(Array.isArray(req.files))) {
            const files = req.files as { [fieldname: string]: Express.Multer.File[] };

            const rgdocfile = files['rgdocfile']?.[0]?.path;
            const fotofile = files['fotofile']?.[0]?.path;
            const laudofile = files['laudofile']?.[0]?.path;
            const relescolar = files['relescolar']?.[0]?.path;

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
        } else {
            return res.status(400).json({ error: "Nenhum arquivo foi enviado ou o formato é inválido." });
        }
    });
};

//encontrar por email
//encontrar por id
//encontrar por nome
//encontrar por cpf
//editar
//deletar
//inativar 
