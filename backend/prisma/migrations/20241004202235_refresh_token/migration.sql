-- CreateTable
CREATE TABLE "refresh_token" (
    "id" SERIAL NOT NULL,
    "expireIn" INTEGER NOT NULL,
    "gerenteId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_gerenteId_key" ON "refresh_token"("gerenteId");

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_gerenteId_fkey" FOREIGN KEY ("gerenteId") REFERENCES "Gerente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
