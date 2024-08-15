/*
  Warnings:

  - Added the required column `email` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL,
ALTER COLUMN "rgdocfile" DROP NOT NULL,
ALTER COLUMN "fotofile" DROP NOT NULL,
ALTER COLUMN "compresfile" DROP NOT NULL,
ALTER COLUMN "laudofile" DROP NOT NULL,
ALTER COLUMN "geralfile" DROP NOT NULL,
ALTER COLUMN "educacaofile" DROP NOT NULL,
ALTER COLUMN "saudefile" DROP NOT NULL,
ALTER COLUMN "gestacaofile" DROP NOT NULL,
ALTER COLUMN "nascimentofile" DROP NOT NULL,
ALTER COLUMN "autonomiafile" DROP NOT NULL,
ALTER COLUMN "comportamentofile" DROP NOT NULL,
ALTER COLUMN "desenvolimentofile" DROP NOT NULL,
ALTER COLUMN "pedagogicofile" DROP NOT NULL;
