import { Request, Response, } from 'express';
import connection from '../db/connection';

export const getEstoques = (req: Request, res: Response) => {
    connection.query('SELECT * FROM tbl_estoque', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

export const getEstoque = (req: Request, res: Response) => {
    
    const { id } = req.params
    connection.query('SELECT * FROM tbl_estoque WHERE id_estoque = ?', id, (err, data) => {
        if(err) throw err;
        res.status(200).json(data[0])
    })
    
}

export const deleteEstoque = (req: Request, res: Response) => {
    
    const { id } = req.params

    connection.query('DELETE FROM tbl_estoque WHERE id_estoque = ?', id, (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        })
    })

}

export const postEstoque = (req: Request, res: Response) => {
    
    const { body } = req;
    connection.query('INSERT INTO tbl_estoque SET ?', [body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        })
    })
    
}

export const putEstoque = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE tbl_estoque SET ? WHERE id_estoque = ?', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        })
    }) 
}