import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BuscaHttpService } from '../../services/busca-http.service';
import { Premiacoes } from '../../Interfaces/InterfacesDados';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-premios',
  standalone: true,
  imports: [CommonModule, DialogModule, TooltipModule],
  templateUrl: './premios.component.html',
  styleUrl: './premios.component.css',
})
export class PremiosComponent {
  visible: boolean = false;
  pessoas_premiadas?: Premiacoes[];
  pessoa_selecionada?: Premiacoes;

  showDialog(pessoa: Premiacoes) {
    this.visible = true;
    this.pessoa_selecionada = pessoa;
  }

  constructor(private http: BuscaHttpService) {
    this.getPremiados();
  }

  getPremiados(): void {
    this.http.buscarGanhadoresDoPremioZumbi().subscribe({
      next: (pessoas_premiadas) => (this.pessoas_premiadas = pessoas_premiadas),
      error: (err) => console.error(err),
    });
  }
}
