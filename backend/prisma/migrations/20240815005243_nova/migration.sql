/*
  Warnings:

  - Added the required column `analise` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Unidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "analise" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Unidade" ADD COLUMN     "nome" TEXT NOT NULL;
