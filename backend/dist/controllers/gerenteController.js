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
exports.gerenteLogin = exports.getUserGerenteId = exports.getUserGerente = exports.createUserGerente = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = require("bcryptjs");
const secrets_1 = require("../secrets");
const prisma = new client_1.PrismaClient();
// Quando criar gerente, sempre usar o id 0 pra unidades. 
const createUserGerente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, cpf, rg, telefone, raca, unidadeId, password } = request.body;
    try {
        const userGerente = yield prisma.gerente.create({
            data: {
                nome,
                email,
                telefone,
                cpf,
                unidadeId,
                raca,
                rg,
                password: (0, bcryptjs_1.hashSync)(password, 10)
            }
        });
        return response.json(userGerente);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.createUserGerente = createUserGerente;
const getUserGerente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = request.body;
    if (!email) {
        return response.status(400).json({ error: "O campo email é obrigatório." });
    }
    try {
        const userGerente = yield prisma.gerente.findUnique({
            where: { email }
        });
        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }
        return response.status(200).json(userGerente);
    }
    catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
exports.getUserGerente = getUserGerente;
const getUserGerenteId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const userGerente = yield prisma.gerente.findUnique({
            where: { id: Number(id) }
        });
        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado." });
        }
        return response.status(200).json(userGerente);
    }
    catch (error) {
        return response.status(500).json({ error: error.message });
    }
});
exports.getUserGerenteId = getUserGerenteId;
const gerenteLogin = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    try {
        const userGerente = yield prisma.gerente.findUnique({
            where: { email }
        });
        if (!userGerente) {
            return response.status(404).json({ error: "Email não encontrado" });
        }
        const isPasswordValid = yield (0, bcryptjs_1.compare)(password, userGerente.password);
        if (!isPasswordValid) {
            return response.status(401).json({
                error: true,
                message: 'Erro: Senha incorreta'
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: userGerente.id
        }, secrets_1.JWT_SECRET);
        return response.json({
            error: false,
            message: 'Login realizado',
            token,
            gerente: {
                id: userGerente.id,
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
exports.gerenteLogin = gerenteLogin;
