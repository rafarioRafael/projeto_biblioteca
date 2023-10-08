"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLivro = exports.postLivro = exports.deleteLivro = exports.getLivro = exports.getLivros = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getLivros = (req, res) => {
    connection_1.default.query('SELECT * FROM tbl_livros', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getLivros = getLivros;
const getLivro = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM tbl_livros WHERE id_livro = ?', id, (err, data) => {
        if (err)
            throw err;
        res.status(200).json(data[0]);
    });
};
exports.getLivro = getLivro;
const deleteLivro = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM tbl_livros WHERE id_livro = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        });
    });
};
exports.deleteLivro = deleteLivro;
const postLivro = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO tbl_livros SET ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        });
    });
};
exports.postLivro = postLivro;
const putLivro = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE tbl_livros SET ? WHERE id_livro = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        });
    });
};
exports.putLivro = putLivro;
