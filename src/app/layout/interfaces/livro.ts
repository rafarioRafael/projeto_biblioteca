export interface Livro {
    id?: number;
    autor: string;
    editora: string;
    categoria: string;
    titulo: string;
    isbn: string;
    ano_publicacao: Date;
    statusLivro: string;
    alugadoPor: string;
}