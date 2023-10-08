import { Request, Response, } from 'express';
import connection from '../db/connection';

export const getLivros = (req: Request, res: Response) => {
    connection.query('SELECT * FROM tbl_livros', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

export const getLivro = (req: Request, res: Response) => {
    
    const { id } = req.params
    connection.query('SELECT * FROM tbl_livros WHERE id_livro = ?', id, (err, data) => {
        if(err) throw err;
        res.status(200).json(data[0])
    })
    
}

export const deleteLivro = (req: Request, res: Response) => {
    
    const { id } = req.params

    connection.query('DELETE FROM tbl_livros WHERE id_livro = ?', id, (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Excluido com sucesso!'
        })
    })

}

export const postLivro = (req: Request, res: Response) => {
    
    const { body } = req;
    connection.query('INSERT INTO tbl_livros SET ?', [body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Adcionado com sucesso!'
        })
    })
    
}

export const putLivro = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE tbl_livros SET ? WHERE id_livro = ?', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Atualizado com sucesso!'
        })
    }) 
}