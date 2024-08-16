import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


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

    try{
        const userPaciente = await prisma.paciente.create({
            data:{
                geral,
                pai,
                mae,
                maisinfo,
                escola,
                saudeinfo,
                fotofile,
                laudofile, 
                relescolar
            }
        });
        return response.json(userPaciente);
    }
    catch(error:any){
        return response.status(400).json({error:error.message});
    }   
}

