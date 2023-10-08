import express, { Application } from 'express';
import routesClientes from '../routes/cliente.routes';
import routesLivros from '../routes/livro.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Rodando na porta ', this.port);
        })
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes() {

        this.app.use('/api/clientes', routesClientes);
        this.app.use('/api/livros', routesLivros);
    }

    conectarDB() {
        connection.connect((err) => {
            if (err) throw err;
            console.log('CONECTADO AO BANCO DE DADOS')
        })
    }

}

export default Server;