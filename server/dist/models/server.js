"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_routes_1 = __importDefault(require("../routes/cliente.routes"));
const livro_routes_1 = __importDefault(require("../routes/livro.routes"));
const estoque_routes_1 = __importDefault(require("../routes/estoque.routes"));
const titulo_routes_1 = __importDefault(require("../routes/titulo.routes"));
const nome_routes_1 = __importDefault(require("../routes/nome.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Rodando na porta ', this.port);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/clientes', cliente_routes_1.default);
        this.app.use('/api/livros', livro_routes_1.default);
        this.app.use('/api/estoque', estoque_routes_1.default);
        this.app.use('/api/titulos', titulo_routes_1.default);
        this.app.use('/api/nomes', nome_routes_1.default);
    }
    conectarDB() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('CONECTADO AO BANCO DE DADOS');
        });
    }
}
exports.default = Server;
