// Necessary Imports
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import multer from 'multer';

// EndPoints
import funcionarioController from './controller/funcionariocontroller.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(funcionarioController);



server.listen(process.env.PORT,() => console.log(`API online na porta ${process.env.PORT}`))