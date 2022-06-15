import { con } from "./connection.js";

export async function inserirProduto (produto) {
    const comando = `insert into 
            tb_produto(id_funcionario, nm_produto, vl_preco, ds_categoria, ds_descricao)
            values(?, ?, ?, ?, ?)`;

    const [resp] = await con.query(comando, [produto.funcionario, produto.nome, produto.preco, produto.categoria, produto.descricao]);

    return resp.insertId;
}

export async function inserirImagem (imagem, id) {
    const comando = `
        UPDATE tb_produto 
        SET img_produto     = ?
        WHERE id_produto    = ?;
    `;

    const [resposta] = await con.query(comando, [imagem, id]);

    return resposta.affectedRows;
}

export async function alterarProduto(produto, id) {
    const comando = `
        UPDATE tb_produto
        SET nm_produto		    = ?,
            vl_preco			= ?,
            ds_categoria		= ?,
            ds_descricao		= ?
      WHERE id_produto          = ?
    `;

    const [resposta] = await con.query(comando, [produto.nome, produto.preco, produto.categoria, produto.descricao, id]);

    return resposta.affectedRows;
}

export async function consultarProdutoId(id){
    const comando = `SELECT	id_produto			id,
    nm_produto  		nome,
    vl_preco			preco,
    ds_categoria		categoria,
    img_produto         imagem,
    ds_descricao		descricao

        FROM 	tb_produto
        WHERE id_produto = ?`;

    const [resposta] = await con.query (comando, [id]);

    return resposta[0];
}

export async function consultarCategoria(categoria){
    const comando = `
    SELECT	
            id_produto			id,
		    nm_produto  		nome,
            vl_preco			preco,
            ds_categoria		categoria,
            ds_descricao		descricao,
            img_produto         imagem
    
    FROM 	tb_produto
    WHERE   ds_categoria = ?`;

    const [resposta] = await con.query (comando, [categoria]);
    return resposta;
}

export async function deletarProduto(id){
    const comando =`DELETE FROM tb_produto
    WHERE id_produto = ?`
    
    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows;
}

export async function consultarTodosProdutos(){
    const comando = `SELECT
    	id_produto			id,
        nm_produto  		nome,
        vl_preco			preco,
        img_produto          imagem,
        ds_categoria		categoria,
        ds_descricao		descricao from tb_produto`
    const [resposta] = await con.query (comando);
    return resposta;
}

export async function buscarPorNome(nome){
    const comando = `
    SELECT id_produto	id,
	  nm_produto		nome,
       vl_preco		    preco,
       ds_categoria	    categoria,
       img_produto      imagem,
       ds_descricao	    descricao
  FROM tb_produto
 WHERE nm_produto			like ?;
    `;

    const [resposta] = await con.query(comando, [`%${nome}%`]);

    return resposta;
}