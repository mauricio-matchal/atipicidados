/*
  Warnings:

  - Added the required column `password` to the `Colaborador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaborador" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "password" TEXT NOT NULL;
