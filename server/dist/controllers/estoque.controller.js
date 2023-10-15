"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEstoque = exports.postEstoque = exports.deleteEstoque = exports.getEstoque = exports.getEstoques = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getEstoques = (req, res) => {
    connection_1.default.query('SELECT * FROM tbl_estoque', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getEstoques = getEstoques;
const getEstoque = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM tbl_estoque WHERE id_estoque = ?', id, (err, data) => {
        if (err)
            throw err;
        res.status(200).json(data[0]);
    });
};
exports.getEstoque = getEstoque;
const deleteEstoque = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM tbl_estoque WHERE id_estoque = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        });
    });
};
exports.deleteEstoque = deleteEstoque;
const postEstoque = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO tbl_estoque SET ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        });
    });
};
exports.postEstoque = postEstoque;
const putEstoque = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE tbl_estoque SET ? WHERE id_estoque = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        });
    });
};
exports.putEstoque = putEstoque;
