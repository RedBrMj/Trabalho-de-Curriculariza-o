import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Eventos, Marcos_Historicos, Premiacoes, Slider } from '../Interfaces/InterfacesDados';

@Injectable({
  providedIn: 'root',
})
export class BuscaHttpService {
  private URL_DADOS_SERVIDOR = 'http://localhost:3000';
  private URL_API_SERVIDOR = 'http://localhost:3001/api/usuarios';
  constructor(private http: HttpClient) {}

  public buscarEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${this.URL_DADOS_SERVIDOR}/eventos`);
  }

  public buscarSliders(): Observable<Slider[]>{
    return this.http.get<Slider[]>(`${this.URL_DADOS_SERVIDOR}/sliders`);
  }

  public enviarSolicitacao(solicitacao: any): Observable<any> {
    return this.http.post(`${this.URL_API_SERVIDOR}`, solicitacao);
  }
}
