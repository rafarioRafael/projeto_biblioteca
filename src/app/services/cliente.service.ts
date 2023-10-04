import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../layout/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clientes'
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl);
  }
}
