import dotenv from 'dotenv';
dotenv.config({path:'.env'})

export const JWT_SECRET = String(process.env.JWT_SECRET)
console.log(JWT_SECRET)