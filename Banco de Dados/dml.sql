use sistemacatalogodb;

-- carga inicial usuário admin
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');


-- efetuar login;
select id_funcionario 		id,
       nm_funcionario		nome,
       ds_email			email
  from tb_funcionario
 where ds_email 		= 'admin@admin.com.br'
   and ds_senha			= '1234';


-- cadastar produto
insert into tb_produto(id_funcionario, nm_produto, vl_preco,ds_categoria)
					   values(1,'macarronada',10.50,'salgados');


-- alterar imagem
UPDATE tb_produto 
   SET img_produto     = '/storage/filme/asdfasdf.jp'
 WHERE id_produto = 1;
 

 -- editar produto
 UPDATE tb_produto
   SET nm_produto		= 'macarronada ao molho',
	   vl_preco			= 10.99,
       ds_categoria		= 'salgado'
 WHERE id_filme = 1;
 

-- excluir produto
DELETE FROM tb_produto
      WHERE id_produto= 1;

   
-- consultar filme por categoria
SELECT	id_produto			id,
		nm_produto  		nome,
        vl_preco			preco,
        ds_categoria		categoria
  FROM 	tb_filme
 WHERE ds_categoria = 'salgado';
 