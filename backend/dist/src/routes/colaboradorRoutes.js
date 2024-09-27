"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colaboradorRouter = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const colaboradorController_1 = require("../controllers/colaboradorController");
const sendpassowordbyemail_1 = require("../email/sendpassowordbyemail");
exports.colaboradorRouter = (0, express_1.Router)();
exports.colaboradorRouter.use((0, cors_1.default)());
exports.colaboradorRouter.post('/', colaboradorController_1.createUserColaborador);
exports.colaboradorRouter.get('/buscar', colaboradorController_1.getUserColaborador);
exports.colaboradorRouter.post('/login', colaboradorController_1.colaboradorLogin);
exports.colaboradorRouter.post('/senha', sendpassowordbyemail_1.sendPassword);
exports.colaboradorRouter.get('/cpf/:cpf', colaboradorController_1.getColaborador);
exports.colaboradorRouter.get('/id/:id', colaboradorController_1.getuserColaboradorId);
exports.colaboradorRouter.get('/getall', colaboradorController_1.getColaboradores);
// validate(ColaboradorCreateInputSchema),
