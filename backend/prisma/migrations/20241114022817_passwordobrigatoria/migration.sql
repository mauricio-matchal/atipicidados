/*
  Warnings:

  - Made the column `email` on table `Paciente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
