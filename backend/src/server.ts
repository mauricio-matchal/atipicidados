import express from 'express';
import { userRouter } from './routes/routes'; 
import cors from 'cors'


import cookieParser from 'cookie-parser';


const port = Number(process.env.EXPRESS_PORT) || 3002;

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}));
app.use(cookieParser());

app.use(userRouter);

app.listen(port, () => {
    console.log(`Está rodando na porta  ${port}`);
});
