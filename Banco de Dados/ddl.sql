create database sistemacatalogodb;
use sistemacatalogodb;

create table tb_funcionario(
	id_funcionario		int primary key auto_increment,
    nm_funcionario		varchar(100),
    ds_email		varchar(100),
    ds_senha		varchar(100)
);
insert into tb_funcionario(nm_funcionario,ds_email,ds_senha)
						values('user teste','teste@gmail.com','teste');
select * from tb_funcionario;

create table tb_produto(
	id_produto			int primary key auto_increment,
    id_funcionario		int,
    nm_produto			varchar(100),
    vl_preco			decimal(10,2),
    img_produto			varchar(100),
    ds_categoria		varchar(100),
    foreign key (id_funcionario) references tb_funcionario (id_funcionario)
); 
drop table tb_produto;                       
insert into tb_produto(id_funcionario,nm_produto,vl_preco,ds_categoria)
						values(1,'teste',19.99,'Salgado');