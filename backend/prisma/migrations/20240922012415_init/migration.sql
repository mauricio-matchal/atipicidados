/*
  Warnings:

  - The values [OUTRA] on the enum `Raca` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Raca_new" AS ENUM ('BRANCA', 'NEGRA', 'AMARELA', 'INDIGENA', 'OUTRAs');
ALTER TABLE "Gerente" ALTER COLUMN "raca" TYPE "Raca_new" USING ("raca"::text::"Raca_new");
ALTER TABLE "Colaborador" ALTER COLUMN "raca" TYPE "Raca_new" USING ("raca"::text::"Raca_new");
ALTER TABLE "Paciente" ALTER COLUMN "raca" TYPE "Raca_new" USING ("raca"::text::"Raca_new");
ALTER TYPE "Raca" RENAME TO "Raca_old";
ALTER TYPE "Raca_new" RENAME TO "Raca";
DROP TYPE "Raca_old";
COMMIT;
