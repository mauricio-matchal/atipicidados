"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteRouter = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const pacienteControllers_1 = require("../controllers/pacienteControllers");
exports.pacienteRouter = (0, express_1.Router)();
exports.pacienteRouter.use((0, cors_1.default)());
exports.pacienteRouter.post('/', pacienteControllers_1.createPaciente);
exports.pacienteRouter.get('/cpf/:cpf', pacienteControllers_1.getPaciente);
exports.pacienteRouter.post('/login', pacienteControllers_1.pacienteLogin);
exports.pacienteRouter.get('/id/:id', pacienteControllers_1.getuserPacienteId);
exports.pacienteRouter.get('/getall', pacienteControllers_1.getPacientes);
// validate(PacienteCreateInputSchema),
