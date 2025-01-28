import express from 'express';
import dotenv from 'dotenv';
import router from './routes/rotes';
import cors from 'cors'
import mongo from './config/mongoose';

mongo();
dotenv.config();
const server = express();
const PORT = process.env.PORT;
server.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
server.use(express.json());
server.use('/',router);
server.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT} `)
})