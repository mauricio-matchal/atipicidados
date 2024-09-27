"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPacientes = exports.getuserPacienteId = exports.getPaciente = exports.pacienteLogin = exports.createPaciente = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const multer_1 = __importDefault(require("multer"));
const prisma = new client_1.PrismaClient();
// Configuração do multer para salvar os arquivos em uma pasta 'uploads'
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
// Exportar a função de criação de paciente
exports.createPaciente = [
    upload.fields([
        { name: 'rgdocfile', maxCount: 1 },
        { name: 'fotofile', maxCount: 1 },
        { name: 'compresfile', maxCount: 1 },
        { name: 'laudofile', maxCount: 1 },
        { name: 'relescolar', maxCount: 1 }
    ]),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { nome, cpf, rg, nascimentodata, nomemae, nomepai, email, telefone, password, gestacao, nascimento, autonomia, comportamento, desenvolimento, pedagogico, geral, mae, pai, maisinfo, escola, saudeinfo, raca } = req.body;
            // Lidar com arquivos enviados
            const files = req.files;
            console.log(req.files); // Log dos arquivos recebidos
            const paciente = yield prisma.paciente.create({
                data: {
                    password: (0, bcryptjs_1.hashSync)(password, 10),
                    nome,
                    cpf,
                    rg,
                    nascimentodata,
                    nomemae,
                    nomepai,
                    email,
                    telefone,
                    rgdocfile: (files === null || files === void 0 ? void 0 : files['rgdocfile']) ? files['rgdocfile'][0].path : null,
                    fotofile: (files === null || files === void 0 ? void 0 : files['fotofile']) ? files['fotofile'][0].path : null,
                    compresfile: (files === null || files === void 0 ? void 0 : files['compresfile']) ? files['compresfile'][0].path : null,
                    laudofile: (files === null || files === void 0 ? void 0 : files['laudofile']) ? files['laudofile'][0].path : null,
                    relescolar: (files === null || files === void 0 ? void 0 : files['relescolar']) ? files['relescolar'][0].path : null,
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
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar paciente' });
        }
    })
];
const pacienteLogin = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    try {
        const userPaciente = yield prisma.paciente.findUnique({
            where: { email }
        });
        if (!userPaciente) {
            return response.status(204).json({ error: true, message: `O paciente cujo o email é ${email} não existe ou ainda não foi cadastrado` });
        }
        const isPasswordValid = yield (0, bcryptjs_1.compare)(password, userPaciente.password);
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
    catch (error) {
        return response.status(500).json({ error: true, message: 'Erro no servidor' });
    }
});
exports.pacienteLogin = pacienteLogin;
const getPaciente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, rg, cpf, telefone } = request.params;
        if (!email && !rg && !cpf && !telefone) {
            return response.status(400).json({ error: 'Informe email, rg, cpf ou telefone para realizar a busca.' });
        }
        const paciente = yield prisma.paciente.findFirst({
            where: {
                OR: [
                    { email: email === null || email === void 0 ? void 0 : email.toString() },
                    { rg: rg === null || rg === void 0 ? void 0 : rg.toString() },
                    { cpf: cpf === null || cpf === void 0 ? void 0 : cpf.toString() },
                    { telefone: telefone === null || telefone === void 0 ? void 0 : telefone.toString() }
                ]
            }
        });
        if (!paciente) {
            return response.status(404).json({ error: 'Paciente não encontrado.' });
        }
        response.status(200).json({ error: false,
            message: `O paciente ${paciente === null || paciente === void 0 ? void 0 : paciente.nome} de cpf: ${paciente.cpf ? paciente.cpf : '(Não possui CPF cadastrado)'} foi encontrado` });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Erro ao buscar paciente.' });
    }
});
exports.getPaciente = getPaciente;
const getuserPacienteId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const userPaciente = yield prisma.paciente.findUnique({
            where: { id: Number(id) }
        });
        if (!userPaciente) {
            return response.status(404).json({ error: "paciente não encontrado." });
        }
        return response.status(200).json(userPaciente);
    }
    catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
exports.getuserPacienteId = getuserPacienteId;
const getPacientes = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield prisma.paciente.findMany();
        if (pacientes.length === 0) {
            return response.status(204).json({ error: true, message: 'Nenhum paciente foi encontrado' });
        }
        return response.status(200).json({ error: false,
            message: 'Segue a lista de todos pacientes',
            pacientes });
    }
    catch (error) {
        return response.status(500).json({ error: true, message: 'Erro interno no servidor' });
    }
});
exports.getPacientes = getPacientes;
