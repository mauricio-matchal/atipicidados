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
exports.getUnidadeById = exports.addGerenteToUnidade = exports.createUserUnidade = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUserUnidade = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, endereco } = request.body;
    try {
        const userUnidade = yield prisma.unidade.create({
            data: {
                nome,
                endereco
            }
        });
        return response.json(userUnidade);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.createUserUnidade = createUserUnidade;
const addGerenteToUnidade = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { gerenteId, unidadeId } = request.body;
    try {
        const unidade = yield prisma.unidade.findUnique({
            where: { id: unidadeId },
        });
        const gerente = yield prisma.gerente.update({
            where: { id: gerenteId },
            data: {
                unidade: {
                    connect: { id: unidadeId },
                },
            },
        });
        return response.status(200).json({
            error: false,
            message: `O gerente ${gerente.nome} foi conectado a unidade ${unidade === null || unidade === void 0 ? void 0 : unidade.nome}`,
            gerente
        });
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.addGerenteToUnidade = addGerenteToUnidade;
const getUnidadeById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const unidade = yield prisma.unidade.findUnique({
            where: { id: Number(id) },
        });
        if (!unidade) {
            return response.status(404).json({ error: 'Unidade não encontrada' });
        }
        return response.json(unidade);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.getUnidadeById = getUnidadeById;
