// Functions
import { inserirProduto, inserirImagem } from "../repository/produtorepository.js";

// Multer
import multer from "multer";
const upload = multer({ dest: 'storage/imagemProduto' });

// Router
import { Router } from "express";
const server = Router();

// Rota responsavel por inserir produtos
server.post('/produto', async (req, resp) => {
    try {
        const produto = req.body;
    
        if(!produto.funcionario ||
        !produto.nome        ||
        !produto.preco       ||
        !produto.categoria)
        throw new Error('Todos os campos são necessarios!');

        const resposta = await inserirProduto(produto);
        
        resp.send({
            x: resposta
        })
    } catch (err) {
        resp.send({
            error: err.message
        })
    }
});


// Rota responsavel por inserir imagem em determinado produto
server.post('/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagem = req.file.path;

        const resposta = await inserirImagem(imagem, id);

        resp.send({
            x: resposta
        })

    }catch (err) {
        resp.send({
            error: err.message
        });
    }
});

export default server;