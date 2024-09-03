import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { SENHA_DE_APP_JULIO } from "../secrets";

const prisma = new PrismaClient();

export const sendPassword = async (request: Request, response: Response) => {
    const { email } = request.body;

    try {
        const user = await prisma.gerente.findUnique({
            where: { email }
        });

        if (!user) {
            return response.status(404).json({ error: "Email não encontrado" });
        }
        const senhaJulio = SENHA_DE_APP_JULIO

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'juliomoreira0111@gmail.com', 
                pass: senhaJulio
            }
        });

        const newPassword = crypto.randomBytes(4).toString('hex');

        transporter.sendMail({
            from: 'Júlio César <juliomoreira0111@gmail.com>',
            to: email,
            subject: 'Recuperação de Senha',
            html: `<p>Olá, sua nova senha para acessar é: ${newPassword}</p>`
        }).then(async () => {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await prisma.gerente.update({
                where: { email },
                data: { password: hashedPassword }
            });

            return response.status(200).json({ message: 'Email enviado com sucesso.' });
        }).catch((error) => {
            return response.status(500).json({ error: "Erro ao enviar nova senha." });
        });

    } catch (error) {
        return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
};
