"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidadeRouter = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const unidadeContrellers_1 = require("../controllers/unidadeContrellers");
exports.unidadeRouter = (0, express_1.Router)();
exports.unidadeRouter.use((0, cors_1.default)());
exports.unidadeRouter.post('/', unidadeContrellers_1.createUserUnidade);
exports.unidadeRouter.put('/connectgerente', unidadeContrellers_1.addGerenteToUnidade);
exports.unidadeRouter.get('/getUnidadeById/:id', unidadeContrellers_1.getUnidadeById);
