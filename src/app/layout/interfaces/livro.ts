export interface Livro {
    id?: number;
    autor: string;
    editora: string;
    categoria: string;
    titulo: string;
    isbn: string;
    anoPublicacao: Date;
    statusLivro: string;
}