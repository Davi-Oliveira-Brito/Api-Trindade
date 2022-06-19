create database sistemacatalogodb;
use sistemacatalogodb;

create table tb_funcionario (
	id_funcionario		int auto_increment primary key,
    nm_funcionario		varchar(200),
    ds_email			varchar(200),
    ds_senha			varchar(200)
); 

create table tb_produto (
	id_produto			int auto_increment primary key,
    id_funcionario		int, 
    nm_produto			varchar(200),
    vl_preco			int,
    img_produto			varchar(100),
    ds_categoria		varchar(100),
    ds_descricao		varchar(200),
	FOREIGN KEY (id_funcionario) REFERENCES tb_funcionario(id_funcionario)
);

desc tb_produto;