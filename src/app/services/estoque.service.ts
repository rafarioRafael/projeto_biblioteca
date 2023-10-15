import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Estoque } from '../layout/interfaces/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/estoque/'
  }

  getEstoques(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteEstoque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addEstoque(estoque: Estoque): Observable<void> {
    estoque.isbn = this.generateRandomISBN();
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, estoque);
  }

  getEstoque(id: number): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateEstoque(id: number, estoque: Estoque): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, estoque);
  }

  generateRandomISBN(): string {
    let isbn = '978'; // Prefixo comum para livros
    for (let i = 3; i < 13; i++) {
      isbn += Math.floor(Math.random() * 10).toString();
    }
    return isbn;
  }

}