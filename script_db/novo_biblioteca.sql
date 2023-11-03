create database biblioteca;
use biblioteca;

create table if not exists tbl_clientes(
	id_clientes int auto_increment primary key,
    nome varchar(255) not null,
    sobrenome varchar(255) not null,
    email varchar(100) not null,
    endereco varchar(255) not null,
    dataNascimento date not null
);

create table if not exists tbl_livros(
	id_livro int auto_increment primary key,
    titulo VARCHAR(255) NOT NULL,
    alugadoPor VARCHAR(45) NULL DEFAULT NULL,
    data_inicial DATE NULL DEFAULT NULL,
    data_final DATE NULL DEFAULT NULL
);

create table if not exists tbl_estoque(
	id_estoque INT NOT NULL AUTO_INCREMENT primary key,
    titulo VARCHAR(255) NULL DEFAULT NULL,
    autor VARCHAR(255) NULL DEFAULT NULL,
    editora VARCHAR(255) NULL DEFAULT NULL,
    genero VARCHAR(255) NULL DEFAULT NULL,
    isbn VARCHAR(45) NULL DEFAULT NULL,
    ano_publicacao VARCHAR(4) NULL DEFAULT NULL,
    qtd INT NULL DEFAULT NULL
);

alter user 'root'@'localhost' identified with mysql_native_password by 'root';
