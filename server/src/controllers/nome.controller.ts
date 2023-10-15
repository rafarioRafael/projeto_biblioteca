import { Request, Response, } from 'express';
import connection from '../db/connection';


//criando controller nome para pegar o nome da tabela clientes e fazer ele puxar pela tabela livros na colula alugadoPor
export const getNome = (req: Request, res: Response) => {
    connection.query('SELECT nome FROM tbl_clientes', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}