// Functions
import { inserirProduto, inserirImagem, alterarProduto, consultarProduto } from "../repository/produtorepository.js";

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


// Rota responsavel por alterar um produto
server.put('/produto/:id', async (req, resp) => {
    try {
        const produto = req.body;
        const { id } = req.params;

        const resposta = await alterarProduto(produto, id);
    
        resp.send({
            x: resposta
        });
    }catch(error) {
        resp.send({
            error: error.message
        })      
    }
});

server.get('/produto/:id', async (req,resp) => {
    try {

    const id = req.params.id;
    const resposta = await consultarProduto(id);
    resp.send({x:resposta})

    } catch (error) {
        resp.send({
            error: error.message
        })
    }
})

export default server;