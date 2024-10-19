import dayjs from 'dayjs'

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
class GenerateRefreshToken {
    async execute(gerenteId:number){
        const expireIn = dayjs().add(15, 'seconds').unix()
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