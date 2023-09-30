"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCliente = exports.postCliente = exports.deleteCliente = exports.getCliente = exports.getClientes = void 0;
const getClientes = (req, res) => {
    res.json({
        msg: "getClientes"
    });
};
exports.getClientes = getClientes;
const getCliente = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getCliente",
        id: id
    });
};
exports.getCliente = getCliente;
const deleteCliente = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteCliente",
        id: id
    });
};
exports.deleteCliente = deleteCliente;
const postCliente = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postCliente",
        body: body
    });
};
exports.postCliente = postCliente;
const putCliente = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putCliente",
        body: body,
        id: id
    });
};
exports.putCliente = putCliente;
