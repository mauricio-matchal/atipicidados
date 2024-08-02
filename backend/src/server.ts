import { userRouter } from './routes/routes';
import express from 'express'

const port = Number(process.env.EXPRESS_PORT) || 3001;


const app = express();
app.use(express.json());
app.use(userRouter);
app.listen(port, ()=>{
    console.log(`Está rodando na porta ${port}`)
})