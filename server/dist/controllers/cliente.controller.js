"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCliente = exports.postCliente = exports.deleteCliente = exports.getCliente = exports.getClientes = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getClientes = (req, res) => {
    connection_1.default.query('select * from tbl_clientes', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getClientes = getClientes;
const getCliente = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM tbl_clientes WHERE id_clientes = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getCliente = getCliente;
const deleteCliente = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('delete from tbl_clientes where id_clientes = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        });
    });
};
exports.deleteCliente = deleteCliente;
const postCliente = (req, res) => {
    const { body } = req;
    connection_1.default.query('insert into tbl_clientes set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        });
    });
};
exports.postCliente = postCliente;
const putCliente = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('update tbl_clientes set ? where id_clientes = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        });
    });
};
exports.putCliente = putCliente;
