import { Request, Response } from 'express';
import connection from '../db/connection';

export const atribuirLivro = (req: Request, res: Response) => {
    const { idLivro, idPessoa } = req.params;

    // Primeiro, você pode verificar se há estoque disponível antes de atribuir o livro
    connection.query(
        'SELECT qtd FROM tbl_estoque WHERE id_livro = ?', idLivro, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao verificar o estoque' });
            }

            const quantidadeEmEstoque = result[0].quantidade;

            if (quantidadeEmEstoque <= 0) {
                return res.status(400).json({ error: 'Estoque esgotado' });
            }

            // Se houver estoque disponível, você pode atribuir o livro
            connection.query(
                'INSERT INTO cliente_livro (id_clientes, id_livros,is_active) VALUES (?, ?, ?)', [idPessoa,idLivro, true], (err, data) => {
                    if (err) {
                        return res.status(500).json({ error: 'Erro ao atribuir o livro' });
                    }

                    // Agora você pode atualizar a quantidade no estoque
                    connection.query(
                        'UPDATE tbl_estoque SET quantidade = quantidade - 1 WHERE id_livro = ?',
                        idLivro,
                        (err, data) => {
                            if (err) {
                                return res.status(500).json({ error: 'Erro ao atualizar o estoque' });
                            }

                            res.json({ message: 'Livro atribuído com sucesso' });
                        }
                    );
                }
            );
        }
    );
};
