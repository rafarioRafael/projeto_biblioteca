import express, { Application } from 'express';
import routesClientes from '../routes/cliente.routes';

class Server{
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Rodando na porta ', this.port);
        })
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/clientes', routesClientes);
    }

}

export default Server;