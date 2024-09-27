"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerentesRouter = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const gerenteController_1 = require("../controllers/gerenteController");
const validate_1 = require("../middleware/validate");
const validateSchema_1 = __importDefault(require("./../../prisma/validateSchema"));
const sendpassowordbyemail_1 = require("../email/sendpassowordbyemail");
exports.gerentesRouter = (0, express_1.Router)();
exports.gerentesRouter.use((0, cors_1.default)());
// Validação usando Zod antes de criar um gerente
exports.gerentesRouter.post('/', (0, validate_1.validate)(validateSchema_1.default), gerenteController_1.createUserGerente);
exports.gerentesRouter.post('/buscar', gerenteController_1.getUserGerente);
exports.gerentesRouter.post('/senha', sendpassowordbyemail_1.sendPassword);
exports.gerentesRouter.post('/login', gerenteController_1.gerenteLogin);
exports.gerentesRouter.get('/cpf/:cpf', gerenteController_1.getGerente);
exports.gerentesRouter.get('/id/:id', gerenteController_1.getUserGerenteId);
exports.gerentesRouter.get('/getall', gerenteController_1.getGerentes);
exports.default = exports.gerentesRouter;
