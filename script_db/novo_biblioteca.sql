-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`tbl_clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`tbl_clientes` (
  `id_clientes` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `sobrenome` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `endereco` VARCHAR(255) NOT NULL,
  `dataNascimento` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_clientes`))
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`tbl_livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`tbl_livros` (
  `id_livro` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `alugadoPor` VARCHAR(45) NULL DEFAULT NULL,
  `data_inicial` DATE NULL DEFAULT NULL,
  `data_final` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_livro`))
ENGINE = InnoDB
AUTO_INCREMENT = 62
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`tbl_estoque`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`tbl_estoque` (
  `id_estoque` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `autor` VARCHAR(255) NULL DEFAULT NULL,
  `editora` VARCHAR(255) NULL DEFAULT NULL,
  `genero` VARCHAR(255) NULL DEFAULT NULL,
  `isbn` VARCHAR(45) NULL DEFAULT NULL,
  `ano_publicacao` VARCHAR(4) NULL DEFAULT NULL,
  `qtd` INT NULL DEFAULT NULL,
  `id_livro` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_estoque`),
  INDEX `id_livro` (`id_livro` ASC) VISIBLE,
  CONSTRAINT `tbl_estoque_ibfk_1`
    FOREIGN KEY (`id_livro`)
    REFERENCES `biblioteca`.`tbl_livros` (`id_livro`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `biblioteca`.`tbl_funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`tbl_funcionarios` (
  `id_funcionario` SMALLINT NOT NULL AUTO_INCREMENT,
  `nomecompleto` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_funcionario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
