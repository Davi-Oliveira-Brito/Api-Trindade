create database sistemacatalogodb;
use sistemacatalogodb;

create table tb_funcionario(
	id_funcionario		int primary key auto_increment,
    nm_funcionario		varchar(100),
    ds_email			varchar(100),
    ds_senha			varchar(100)
);

create table tb_produto(
	id_produto			int primary key auto_increment,
    id_funcionario		int,
    nm_produto			varchar(100),
    vl_preco			decimal(10,2),
    img_produto			varchar(100),
    ds_categoria		varchar(100),
    foreign key (id_funcionario) references tb_funcionario (id_funcionario)
); 