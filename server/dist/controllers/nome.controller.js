"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNome = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//criando controller nome para pegar o nome da tabela clientes e fazer ele puxar pela tabela livros na colula alugadoPor
const getNome = (req, res) => {
    connection_1.default.query('SELECT nome FROM tbl_clientes', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getNome = getNome;
