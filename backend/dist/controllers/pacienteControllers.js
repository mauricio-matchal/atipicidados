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
exports.createUserPaciente = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//considerar 0 como valor default para unidade id
// export const createPacienteAnalise = async(request: Request, response: Response) => {
//     const {geral, escola, mae, pai, maisinfo, saudeinfo} =  request.body;
//     try {
//         const userPaciente = await prisma.pacienteanalise
//     }
// }
const createUserPaciente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { geral, pai, mae, maisinfo, escola, saudeinfo, fotofile, laudofile, relescolar, } = request.body;
    try {
        const userPaciente = yield prisma.paciente.create({
            data: {
                geral,
                pai,
                mae,
                maisinfo,
                escola,
                saudeinfo,
                fotofile,
                laudofile,
                relescolar
            }
        });
        return response.json(userPaciente);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.createUserPaciente = createUserPaciente;
