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
exports.getColaboradores = exports.getColaborador = exports.colaboradorLogin = exports.getuserColaboradorId = exports.getUserColaborador = exports.createUserColaborador = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = require("bcryptjs");
const secrets_1 = require("../secrets");
const prisma = new client_1.PrismaClient();
// Quando criar colaborador, sempre usar o id 0 pra unidades. 
const createUserColaborador = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, cpf, rg, telefone, raca, unidadeId, password, nascimento, titulo, formacao, genero } = request.body;
    try {
        const userColaborador = yield prisma.colaborador.create({
            data: {
                nome,
                email,
                telefone,
                cpf,
                unidadeId,
                raca,
                rg,
                password: (0, bcryptjs_1.hashSync)(password, 10),
                nascimento,
                titulo,
                formacao,
                genero
            }
        });
        return response.json(userColaborador);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.createUserColaborador = createUserColaborador;
const getUserColaborador = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = request.body;
    if (!email) {
        return response.status(400).json({ error: "O campo email é obrigatório." });
    }
    try {
        const userColaborador = yield prisma.colaborador.findUnique({
            where: { email }
        });
        if (!userColaborador) {
            return response.status(404).json({ error: "colaborador não encontrado." });
        }
        return response.status(200).json(userColaborador);
    }
    catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
exports.getUserColaborador = getUserColaborador;
const getuserColaboradorId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const userColaborador = yield prisma.colaborador.findUnique({
            where: { id: Number(id) }
        });
        if (!userColaborador) {
            return response.status(404).json({ error: "colaborador não encontrado." });
        }
        return response.status(200).json(userColaborador);
    }
    catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
exports.getuserColaboradorId = getuserColaboradorId;
const colaboradorLogin = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    try {
        const userColaborador = yield prisma.colaborador.findUnique({
            where: { email }
        });
        if (!userColaborador) {
            return response.status(404).json({ error: "Email não encontrado" });
        }
        const isPasswordValid = yield (0, bcryptjs_1.compare)(password, userColaborador.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: userColaborador.id
        }, secrets_1.JWT_SECRET);
        return response.status(200).json({
            error: false,
            message: 'Login realizado',
            token,
            gerente: {
                id: userColaborador.id,
            }
        });
    }
    catch (error) {
        return response.status(500).json({
            error: true,
            message: 'Erro interno do servidor'
        });
    }
});
exports.colaboradorLogin = colaboradorLogin;
const getColaborador = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { cpf } = request.params;
    try {
        const userColaborador = yield prisma.colaborador.findFirst({
            where: {
                cpf: cpf
            }
        });
        if (userColaborador) {
            return response.status(200).json({
                error: false,
                message: `O colaborador ${userColaborador.nome} foi encontrado`,
                userColaborador
            });
        }
        return response.status(404).json({
            message: `O colaborador com o CPF ${cpf} não foi encontrado`
        });
    }
    catch (error) {
        return response.status(500).json({
            message: "Erro no servidor",
            error: error.message
        });
    }
});
exports.getColaborador = getColaborador;
const getColaboradores = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colaboradores = yield prisma.colaborador.findMany();
        if (colaboradores.length === 0) {
            return response.status(204).json({ error: true, message: 'Nenhum colaborador foi encontrado' });
        }
        return response.status(200).json({ error: false,
            message: 'Segue a lista de todos colaboradores',
            colaboradores });
    }
    catch (error) {
        return response.status(500).json({ error: true, message: 'Erro interno no servidor' });
    }
});
exports.getColaboradores = getColaboradores;
