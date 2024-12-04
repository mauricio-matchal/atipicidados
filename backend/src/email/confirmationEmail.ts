import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import QRCode from "qrcode";
import speakeasy from "speakeasy";
import { SENHA_DE_APP_JULIO } from "../secrets";

const prisma = new PrismaClient();

export const sendMail = async (request: Request, response: Response) => {
    const { email } = request.body;

    try {
        const userGerente = await prisma.gerente.findUnique({
            where: { email },
        });

        if (!userGerente) {
            return response.status(404).json({ error: "Gerente não encontrado" });
        }

        if (!userGerente.twoFASecret) {
            const secret = speakeasy.generateSecret();
            await prisma.gerente.update({
                where: { email },
                data: { twoFASecret: secret.base32 },
            });
            userGerente.twoFASecret = secret.base32; 
        }

        const qrCodeUrl = speakeasy.otpauthURL({
            secret: userGerente.twoFASecret,
            label: userGerente.email,
            issuer: "Meu App",
            encoding: "base32",
        });

        const qrCodeBase64 = await QRCode.toDataURL(qrCodeUrl);

        const senhaJulio = SENHA_DE_APP_JULIO;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "juliomoreira0111@gmail.com",
                pass: senhaJulio,
            },
        });

        await transporter.sendMail({
            from: "Equipe Atipicidados <meuapp@gmail.com>",
            to: email,
            subject: "Configuração de autenticação de dois fatores",
            html: `
                <p style="font-family: Arial, font-weight: bold, sans-serif; font-size: 16px; color: #000000;">
                    Olá <strong>${userGerente.nome}</strong>,<br><br>
                    Para ativar a autenticação de dois fatores na sua conta, escaneie o QR Code abaixo no seu aplicativo de autenticação (como Google Authenticator ou Authy).<br><br>
                </p>
                <img src="cid:qrCodeImage" alt="QR Code" style="width:200px; height:200px;" /><br>
                
                <p style="font-family: Arial, sans-serif; font-size: 14px; color: #000000;">
                    Atenciosamente,<br>
                    <strong>Equipe Atipicid@dos</strong>
                </p>
            `,
            attachments: [
                {
                    filename: "qrcode.png", 
                    content: qrCodeBase64.split("base64,")[1],
                    encoding: "base64",
                    cid: "qrCodeImage", 
                },
            ],
        });
        

        return response.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
};
