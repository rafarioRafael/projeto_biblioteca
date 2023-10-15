"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitulos = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getTitulos = (req, res) => {
    connection_1.default.query('SELECT titulo FROM tbl_estoque', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getTitulos = getTitulos;
