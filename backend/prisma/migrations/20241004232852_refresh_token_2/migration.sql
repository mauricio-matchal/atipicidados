-- DropIndex
DROP INDEX "refresh_token_gerenteId_key";

-- AlterTable
ALTER TABLE "refresh_token" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "refresh_token_id_seq";
