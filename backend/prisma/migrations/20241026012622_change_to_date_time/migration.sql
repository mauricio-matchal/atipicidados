/*
  Warnings:

  - Changed the type of `nascimento` on the `Colaborador` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nascimento` on the `Gerente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Colaborador" DROP COLUMN "nascimento",
ADD COLUMN     "nascimento" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Gerente" DROP COLUMN "nascimento",
ADD COLUMN     "nascimento" TIMESTAMP(3) NOT NULL;
