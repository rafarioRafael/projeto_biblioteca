export interface Livro {
    id?: number;
    titulo: string;
    alugadoPor: string;
    data_inicial: Date;
    data_final: Date;
}