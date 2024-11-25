import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import nodemailer from 'nodemailer';
import { SENHA_DE_APP_JULIO } from "../secrets";

const prisma = new PrismaClient();

export const sendMail = async (request: Request, response: Response) => {
    const { email, unidade } = request.body;

    try {
        const user = await prisma.paciente.findUnique({
            where: { email },
            include: { unidade: true }
        });

        if (!user) {
            return response.status(404).json({ error: "Email não encontrado" });
        }

        const senhaJulio = SENHA_DE_APP_JULIO;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'juliomoreira0111@gmail.com',
                pass: senhaJulio
            }
        });

        await transporter.sendMail({
            from: 'Equipe Atipicidados <atipicidados@gmail.com>',
            to: email,
            subject: 'Registo criado',
            html: `
                <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
                    Olá <strong>${user.nome}</strong>,<br><br>
                    Dirija-se a sua unidade <strong style='font-size:24px; font-weight: bold;'>${user.unidade? user.unidade.nome: unidade}</strong>
                    para tomar os próximos passos.
                    Atenciosamente,<br>
                    <strong>Equipe Atipicidados</strong><br><br>
                    Se precisar de mais assistência, não hesite em nos contatar.
                </p>
            `
        });

        return response.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
};
