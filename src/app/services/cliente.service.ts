import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development'
import { Cliente } from '../layout/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clientes/'
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCliente(cliente: Cliente): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateCliente(id: number, cliente: Cliente): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, cliente);
  }
}
