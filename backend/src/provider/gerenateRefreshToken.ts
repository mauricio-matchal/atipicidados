import dayjs from 'dayjs'

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
class GenerateRefreshToken {
    async execute(gerenteId:string){
        const expireIn = dayjs().add(30, 'seconds').unix()
        const generateRefreshToken = await prisma.refreshToken.create({
            data:{
                gerenteId,
                expireIn,
            }
        })
        return generateRefreshToken
    }
}
export {GenerateRefreshToken}