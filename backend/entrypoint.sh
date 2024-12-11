#!/bin/sh
set -e

echo "Iniciando o seed..."
npx ts-node prisma/seeds.ts

echo "Iniciando o servidor..."
exec npx ts-node src/server.ts