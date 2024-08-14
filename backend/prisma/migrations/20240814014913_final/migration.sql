/*
  Warnings:

  - Added the required column `cpf` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomemae` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomepai` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaborador" ADD COLUMN     "compresfile" TEXT,
ADD COLUMN     "fotofile" TEXT,
ADD COLUMN     "rgdocfile" TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "rg" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Gerente" ADD COLUMN     "compresfile" TEXT,
ADD COLUMN     "fotofile" TEXT,
ADD COLUMN     "rgdocfile" TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "rg" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "autonomiafile" TEXT,
ADD COLUMN     "comportamentofile" TEXT,
ADD COLUMN     "compresfile" TEXT,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "desenvolimentofile" TEXT,
ADD COLUMN     "educacaofile" TEXT,
ADD COLUMN     "fotofile" TEXT,
ADD COLUMN     "geralfile" TEXT,
ADD COLUMN     "gestacaofile" TEXT,
ADD COLUMN     "laudofile" TEXT,
ADD COLUMN     "nascimentofile" TEXT,
ADD COLUMN     "nomemae" TEXT NOT NULL,
ADD COLUMN     "nomepai" TEXT NOT NULL,
ADD COLUMN     "pedagogicofile" TEXT,
ADD COLUMN     "rg" TEXT NOT NULL,
ADD COLUMN     "rgdocfile" TEXT,
ADD COLUMN     "saudefile" TEXT;
