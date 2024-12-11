import { PrismaClient } from '@prisma/client';
import { compare, hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {

    try{
        const UnidadePrincipal = await prisma.unidade.create({
            data:{endereco:"Rua do Palmares",
                nome:"unidade 1"
            }
        }

)
console.log(UnidadePrincipal)
    }
    catch(error:any){
        console.log(error.message)
    }

    try{
        const gerenteJulioCesar = await prisma.gerente.create({
            data:{
                nome: 'Júlio César Silva Moreira',
                email:"juliomoreira@ufba.br",
                password: hashSync('123456789', 10),
                raca:'branca',
                genero:"masculino",
                cpf:"111.111.111-11",
                rg:"11.111.111-11",
                telefone:"(77) 98106-0579",
                fotofile:"uploads/1733943485149-3x4.jpeg",
                nascimento:"2024-12-04T00:00:00Z",
                unidadeId:1

            }
            
        })
        console.log({gerente: gerenteJulioCesar})

    }
    catch(error:any){
        console.error("Erro ao criar gerente:", error);
    }





    await prisma.$disconnect();

    
}

main().catch(e => {
    console.error('Erro no processo principal:', e);
});


