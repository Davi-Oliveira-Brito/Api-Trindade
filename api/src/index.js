// Necessary Imports
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// EndPoints
import funcionarioController from './controller/funcionariocontroller.js';
import produtoController from './controller/produtocontroller.js'

const server = express();
server.use(cors());
server.use(express.json());

// Using Endpoints
server.use(funcionarioController);
server.use(produtoController);

// Providing Images from storage
server.use('/storage/imagemProduto', express.static('storage/imagemProduto'));

server.listen(process.env.PORT,() => console.log(`API online na porta ${process.env.PORT}`))