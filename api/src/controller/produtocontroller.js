// Functions
import { inserirProduto, inserirImagem, alterarProduto, consultarProdutoId, consultarCategoria, consultarTodosProdutos, deletarProduto, buscarPorNome } from "../repository/produtorepository.js";

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
        !produto.categoria   ||
        !produto.descricao)
        throw new Error('Todos os campos são necessarios!');

        const resposta = await inserirProduto(produto);
        
        resp.send({
            insertedId: resposta
        })
    } catch (error) {
        resp.status(400).send({
            error: error.message
        })
    }
});


// Rota responsavel por inserir imagem em determinado produto
server.put('/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {
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

server.get('/produto/q', async (req,resp) => {
    try{
        const nome = req.query.nome
        const resposta = await buscarPorNome(nome);
        resp.send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }
});

server.get('/produto/:categoria', async (req,resp) => {
    try{
        const categoria = req.params.categoria;
        const resposta = await consultarCategoria(categoria);
        resp.send({x:resposta});
    }    
    catch(error){
        resp.send({

            erro:error.message
        })    
    }        
})    

server.get('/produto/buscarid/:id', async (req,resp) => {
    try{
        const { id } = req.params;
        const resposta = await consultarProdutoId(id);
        
        resp.send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })    
    }    
})    


server.delete('/produto/delete/:id', async (req,resp) =>{
    try {
        const { id } = req.params;
        const resposta = deletarProduto(id);
        resp.send({x:resposta})

    } catch (error) {
        resp.status(404).send({
            error:error.message
        })    
    }    
})    


server.get('/produto', async (req,resp) => {
    try{
        const resposta = await consultarTodosProdutos();
        resp.send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })    
    }    
})    



export default server;