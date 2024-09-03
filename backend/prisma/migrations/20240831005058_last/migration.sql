/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Colaborador` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "password" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_email_key" ON "Colaborador"("email");
