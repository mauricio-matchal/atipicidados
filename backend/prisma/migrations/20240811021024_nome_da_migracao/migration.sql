/*
  Warnings:

  - You are about to drop the `colaborador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unidade` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Gerente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `Gerente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Gerente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raca` to the `Gerente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `Gerente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeId` to the `Gerente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gerente" ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "raca" "Raca" NOT NULL,
ADD COLUMN     "rg" INTEGER NOT NULL,
ADD COLUMN     "unidadeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "colaborador";

-- DropTable
DROP TABLE "paciente";

-- DropTable
DROP TABLE "unidade";

-- CreateTable
CREATE TABLE "Colaborador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "rg" INTEGER NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "formacao" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "raca" "Raca" NOT NULL,
    "unidadeId" INTEGER NOT NULL,

    CONSTRAINT "Colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "raca" "Raca" NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" SERIAL NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PacienteColaboradores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_cpf_key" ON "Colaborador"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_rg_key" ON "Colaborador"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_telefone_key" ON "Colaborador"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "_PacienteColaboradores_AB_unique" ON "_PacienteColaboradores"("A", "B");

-- CreateIndex
CREATE INDEX "_PacienteColaboradores_B_index" ON "_PacienteColaboradores"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Gerente_cpf_key" ON "Gerente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Gerente_rg_key" ON "Gerente"("rg");

-- AddForeignKey
ALTER TABLE "Gerente" ADD CONSTRAINT "Gerente_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colaborador" ADD CONSTRAINT "Colaborador_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PacienteColaboradores" ADD CONSTRAINT "_PacienteColaboradores_A_fkey" FOREIGN KEY ("A") REFERENCES "Colaborador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PacienteColaboradores" ADD CONSTRAINT "_PacienteColaboradores_B_fkey" FOREIGN KEY ("B") REFERENCES "Paciente"("id") ON DELETE CASCADE ON UPDATE CASCADE;
