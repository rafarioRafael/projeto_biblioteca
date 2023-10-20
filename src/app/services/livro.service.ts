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
  private myApiTituloUrl: string;
  private myApiNomeUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/livros/'
    this.myApiTituloUrl = 'api/titulos'
    this.myApiNomeUrl = 'api/nomes'
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteLivro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addLivro(livro: Livro): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, livro);
  }

  getLivro(id: number): Observable<Livro> {
    
    return this.http.get<Livro>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateLivro(id: number, livro: Livro): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, livro);
  }

  getTitulos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiTituloUrl}`);
  }

  getNomes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiNomeUrl}`);
  }

  atribuirLivro(idLivro: number, idPessoa: number): Observable<void> {
    const requestBody = { idLivro, idPessoa };
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}atribuir`, requestBody);
  }

}
