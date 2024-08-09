-- CreateEnum
CREATE TYPE "Raca" AS ENUM ('BRANCA', 'NEGRA', 'AMARELA', 'INDIGENA', 'OUTRA');

-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMININO', 'PREFIRO_NAO_INFORMAR');

-- CreateTable
CREATE TABLE "Gerente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Gerente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "formacao" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "raca" "Raca" NOT NULL,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidade" (
    "id" SERIAL NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "unidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gerente_email_key" ON "Gerente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Gerente_telefone_key" ON "Gerente"("telefone");
