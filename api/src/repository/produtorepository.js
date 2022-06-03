import { con } from "./connection.js";

export async function inserirProduto (produto) {
    const comando = `
        insert into 
            tb_produto(id_funcionario, nm_produto, vl_preco, ds_categoria)
            values(?, ?, ?, ?);
    `;

    const [resp] = await con.query(comando, [produto.funcionario, produto.nome, produto.preco, produto.categoria]);

    return resp.affectedRows;
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
            ds_categoria		= ?
      WHERE id_produto          = ?
    `;

    const [resposta] = await con.query(comando, [produto.nome, produto.preco, produto.categoria, id]);

    return resposta.affectedRows;
}