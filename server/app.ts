import express from 'express';
import dotenv from 'dotenv';
import router from './routes/rotes';
import cors from 'cors'

dotenv.config();
const server = express();
const PORT = process.env.PORT;
server.use(cors({
    origin:'localhost:5174'
}))
server.use(express.json());
server.use('/',router);
server.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT} `)
})