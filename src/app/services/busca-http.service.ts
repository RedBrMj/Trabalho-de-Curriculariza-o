import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Eventos, Marcos_Historicos, Premiacoes, Slider } from '../Interfaces/InterfacesDados';

@Injectable({
  providedIn: 'root',
})
export class BuscaHttpService {
  private URL_DADOS = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  buscaDeMomentosHistoricos(): Observable<Marcos_Historicos[]> {
    return this.http.get<Marcos_Historicos[]>(`${this.URL_DADOS}/marcos-historicos`);
  }

  buscarGanhadoresDoPremioZumbi(): Observable<Premiacoes[]> {
    return this.http.get<Premiacoes[]>(`${this.URL_DADOS}/pessoas_premiadas`);
  }

  buscarEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${this.URL_DADOS}/eventos`);
  }

  buscarSliders(): Observable<Slider[]>{
    return this.http.get<Slider[]>(`${this.URL_DADOS}/sliders`);
  }
}
