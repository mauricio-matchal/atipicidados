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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserGerenteId = exports.getUserGerente = exports.createUserGerente = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUserGerente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, telefone } = request.body;
    try {
        const userGerente = yield prisma.gerente.create({
            data: {
                nome,
                email,
                telefone
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
