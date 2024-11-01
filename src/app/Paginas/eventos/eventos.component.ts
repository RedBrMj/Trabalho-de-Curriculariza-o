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

  constructor(private http: BuscaHttpService) {
    this.buscarListaDeEventos();
  }

  public buscarListaDeEventos(): void {
    this.http.buscarEventos().subscribe({
      next: (eventosDisponiveis) =>
        (this.eventosDisponiveis = eventosDisponiveis),
      error: (err) => console.error(err),
    });
  }

  eventosDisponiveis!: Eventos[];
}
