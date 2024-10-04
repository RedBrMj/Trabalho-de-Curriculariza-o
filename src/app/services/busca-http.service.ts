import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuscaHttpService {
  private URL_DADOS = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  buscaDeMomentosHistoricos(): Observable<any> {
    return this.http.get<any>(`${this.URL_DADOS}/marcos-historicos`);
  }

  buscarGanhadoresDoPremioZumbi(): Observable<any> {
    return this.http.get<any>(`${this.URL_DADOS}/pessoas_premiadas`);
  }

  buscarEventos(): Observable<any>{
    return this.http.get(`${this.URL_DADOS}/eventos`);
  }
}
