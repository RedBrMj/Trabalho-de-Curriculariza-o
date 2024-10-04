import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Eventos } from '../../Interfaces/InterfacesDados';
import { BuscaHttpService } from '../../services/busca-http.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  eventoAtivo: string = '';

  constructor(private http: BuscaHttpService) {
    this.buscarListaDeEventos();
  }

  buscarListaDeEventos(): void {
    this.http.buscarEventos().subscribe({
      next: (eventosDisponiveis) =>
        (this.eventosDisponiveis = eventosDisponiveis),
      error: (err) => console.error(err),
    });
  }

  eventosDisponiveis!: Eventos[];

  abrirEvento(evento: string) {
    this.eventoAtivo = evento;
    console.log(this.eventoAtivo);
  }
}
