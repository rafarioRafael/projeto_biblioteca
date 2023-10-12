import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Livro } from '../layout/interfaces/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/livros/'
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteLivro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addLivro(livro: Livro): Observable<void> {
    livro.isbn = this.generateRandomISBN();
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, livro);
  }

  getLivro(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateLivro(id: number, livro: Livro): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, livro);
  }

  generateRandomISBN(): string {
    let isbn = '978'; // Prefixo comum para livros
    for (let i = 3; i < 13; i++) {
      isbn += Math.floor(Math.random() * 10).toString();
    }
    return isbn;
  }

}
