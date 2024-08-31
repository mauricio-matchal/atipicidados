/*
  Warnings:

  - Added the required column `email` to the `Colaborador` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Colaborador" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "email" SET NOT NULL;
