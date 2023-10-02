import { Request, Response, } from 'express';
import connection from '../db/connection';

export const getClientes = (req: Request, res: Response) => {
    connection.query('select * from tbl_clientes', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

export const getCliente = (req: Request, res: Response) => {
    
    const { id } = req.params
    connection.query('SELECT * FROM tbl_clientes WHERE id_clientes = ?', id, (err, data) => {
        if(err) throw err;
        res.json(data[0])
    })
    
}

export const deleteCliente = (req: Request, res: Response) => {
    
    const { id } = req.params

    connection.query('delete from tbl_clientes where id_clientes = ?', id, (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        })
    })

}

export const postCliente = (req: Request, res: Response) => {
    
    const { body } = req;
    connection.query('insert into tbl_clientes set ?', [body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        })
    })
    
}

export const putCliente = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    connection.query('update tbl_clientes set ? where id_clientes = ?', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        })
    }) 
}