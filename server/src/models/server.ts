import express, { Application } from 'express';
import routesClientes from '../router/cliente.routes';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Rodando na porta ', this.port)
        })
    }
    routes(){
        this.app.use('/api/clientes', routesClientes);
    }

}

export default Server;