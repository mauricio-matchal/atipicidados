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
exports.sendPassword = void 0;
const client_1 = require("@prisma/client");
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const secrets_1 = require("../secrets");
const prisma = new client_1.PrismaClient();
const sendPassword = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = request.body;
    try {
        const user = yield prisma.gerente.findUnique({
            where: { email }
        });
        if (!user) {
            return response.status(404).json({ error: "Email não encontrado" });
        }
        const senhaJulio = secrets_1.SENHA_DE_APP_JULIO;
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'juliomoreira0111@gmail.com',
                pass: senhaJulio
            }
        });
        const newPassword = crypto_1.default.randomBytes(4).toString('hex');
        transporter.sendMail({
            from: 'Júlio César <juliomoreira0111@gmail.com>',
            to: email,
            subject: 'Recuperação de Senha',
            html: `<p>Olá, sua nova senha para acessar é: ${newPassword}</p>`
        }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
            yield prisma.gerente.update({
                where: { email },
                data: { password: hashedPassword }
            });
            return response.status(200).json({ message: 'Email enviado com sucesso.' });
        })).catch((error) => {
            return response.status(500).json({ error: "Erro ao enviar nova senha." });
        });
    }
    catch (error) {
        return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
});
exports.sendPassword = sendPassword;
