"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const gerentesRoutes_1 = require("./gerentesRoutes");
const unidadeRouter_1 = require("./unidadeRouter");
const pacienteRouter_1 = require("./pacienteRouter");
const colaboradorRoutes_1 = require("./colaboradorRoutes");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.use((0, cors_1.default)());
exports.userRouter.use('/gerentes', gerentesRoutes_1.gerentesRouter);
exports.userRouter.use('/unidades', unidadeRouter_1.unidadeRouter);
exports.userRouter.use('/pacientes', pacienteRouter_1.pacienteRouter);
exports.userRouter.use('/colaboradores', colaboradorRoutes_1.colaboradorRouter);
//Demais rotas que faremos
