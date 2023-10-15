import { Request, Response, } from 'express';
import connection from '../db/connection';

export const getTitulos = (req: Request, res: Response) => {
    connection.query('SELECT titulo FROM tbl_estoque', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}