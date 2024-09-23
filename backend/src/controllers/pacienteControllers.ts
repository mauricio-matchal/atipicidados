import { PrismaClient } from '@prisma/client';
import { compare, hashSync } from 'bcryptjs';
import { Request, Response } from 'express';
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


// Exportar a função de criação de paciente
export const createPaciente = [
  
  upload.fields([ 
    { name: 'rgdocfile', maxCount: 1 },
    { name: 'fotofile', maxCount: 1 },
    { name: 'compresfile', maxCount: 1 },
    { name: 'laudofile', maxCount: 1 },
    { name: 'relescolar', maxCount: 1 }
  ]),
  async (req: Request, res: Response) => {
    try {
      const {
        nome, cpf, rg, nascimentodata, nomemae, nomepai, email, telefone, password,
        gestacao, nascimento, autonomia, comportamento, desenvolimento, pedagogico,
        geral, mae, pai, maisinfo, escola, saudeinfo, raca
      } = req.body;

      // Lidar com arquivos enviados
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      console.log(req.files); // Log dos arquivos recebidos

      const paciente = await prisma.paciente.create({
        data: {
          password:hashSync(password, 10),
          nome,
          cpf,
          rg,
          nascimentodata,
          nomemae,
          nomepai,
          email,
          telefone,
          rgdocfile: files?.['rgdocfile'] ? files['rgdocfile'][0].path : null,
          fotofile: files?.['fotofile'] ? files['fotofile'][0].path : null,
          compresfile: files?.['compresfile'] ? files['compresfile'][0].path : null,
          laudofile: files?.['laudofile'] ? files['laudofile'][0].path : null,
          relescolar: files?.['relescolar'] ? files['relescolar'][0].path : null,
          gestacao: gestacao ? JSON.parse(gestacao) : null,
          nascimento: nascimento ? JSON.parse(nascimento) : null,
          autonomia: autonomia ? JSON.parse(autonomia) : null,
          comportamento: comportamento ? JSON.parse(comportamento) : null,
          desenvolimento: desenvolimento ? JSON.parse(desenvolimento) : null,
          pedagogico: pedagogico ? JSON.parse(pedagogico) : null,
          geral: geral ? JSON.parse(geral) : null,
          mae: mae ? JSON.parse(mae) : null,
          pai: pai ? JSON.parse(pai) : null,
          maisinfo: maisinfo ? JSON.parse(maisinfo) : null,
          escola: escola ? JSON.parse(escola) : null,
          saudeinfo: saudeinfo ? JSON.parse(saudeinfo) : null,
          raca
        }
      });

      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar paciente' });
    }
  }
];


export const pacienteLogin = async (request: Request, response:Response) => {
  const {email, password} = request.body;

  try{
    const userPaciente = await prisma.paciente.findUnique({
      where: { email}
  });
  if (!userPaciente ){
    return response.status(204).json({error:true, message:`O paciente cujo o email é ${email} não existe ou ainda não foi cadastrado`});
  }
  const isPasswordValid = await compare(password, userPaciente.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }
      return response.status(200).json({
          error: false,
          message: 'Login realizado',
          gerente: {
              id: userPaciente.id,
          }
      });


  }
  catch(error:any){
    return response.status(500).json({error:true, message: 'Erro no servidor'})

  }


}



export const getPaciente = async (request: Request, response: Response) => {
  try {
    const { email, rg, cpf, telefone } = request.params;

    if (!email && !rg && !cpf && !telefone) {
      return response.status(400).json({ error: 'Informe email, rg, cpf ou telefone para realizar a busca.' });
    }

    const paciente = await prisma.paciente.findFirst({
      where: {
        OR: [
          { email: email?.toString() },
          { rg: rg?.toString() },
          { cpf: cpf?.toString() },
          { telefone: telefone?.toString() }
        ]
      }
    });

    if (!paciente) {
      return response.status(404).json({ error: 'Paciente não encontrado.' });
    }

    response.status(200).json({error:false, 
      message:`O paciente ${paciente?.nome} de cpf: ${paciente.cpf? paciente.cpf : '(Não possui CPF cadastrado)'} foi encontrado`});
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao buscar paciente.' });
  }
};

export const getuserPacienteId = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
      const userPaciente = await prisma.paciente.findUnique({
          where: { id: Number(id) }
      });

      if (!userPaciente) {
          return response.status(404).json({ error: "paciente não encontrado." });
      }

      return response.status(200).json(userPaciente);
  } catch (error: any) {
      return response.status(500).json({ error: error.message });
  }
}