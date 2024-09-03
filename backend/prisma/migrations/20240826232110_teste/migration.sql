/*
  Warnings:

  - You are about to drop the column `autonomiafile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `comportamentofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `desenvolimentofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `educacaofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `geralfile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `gestacaofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `nascimentofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `pedagogicofile` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `saudefile` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `password` to the `Gerente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Unidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gerente" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "autonomiafile",
DROP COLUMN "comportamentofile",
DROP COLUMN "desenvolimentofile",
DROP COLUMN "educacaofile",
DROP COLUMN "geralfile",
DROP COLUMN "gestacaofile",
DROP COLUMN "nascimentofile",
DROP COLUMN "pedagogicofile",
DROP COLUMN "saudefile",
ADD COLUMN     "analise" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "autonomia" JSONB,
ADD COLUMN     "comportamento" JSONB,
ADD COLUMN     "desenvolimento" JSONB,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "escola" JSONB,
ADD COLUMN     "geral" JSONB,
ADD COLUMN     "gestacao" JSONB,
ADD COLUMN     "mae" JSONB,
ADD COLUMN     "maisinfo" JSONB,
ADD COLUMN     "nascimento" JSONB,
ADD COLUMN     "nascimentodata" TEXT,
ADD COLUMN     "pai" JSONB,
ADD COLUMN     "pedagogico" JSONB,
ADD COLUMN     "relescolar" TEXT,
ADD COLUMN     "saudeinfo" JSONB,
ADD COLUMN     "telefone" TEXT,
ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "rg" DROP NOT NULL,
ALTER COLUMN "nomemae" DROP NOT NULL,
ALTER COLUMN "nomepai" DROP NOT NULL,
ALTER COLUMN "unidadeId" SET DEFAULT 1,
ALTER COLUMN "rgdocfile" DROP NOT NULL,
ALTER COLUMN "fotofile" DROP NOT NULL,
ALTER COLUMN "compresfile" DROP NOT NULL,
ALTER COLUMN "laudofile" DROP NOT NULL,
ALTER COLUMN "raca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Unidade" ADD COLUMN     "nome" TEXT NOT NULL;
