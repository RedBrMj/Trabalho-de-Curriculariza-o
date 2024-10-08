import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BuscaHttpService } from '../../services/busca-http.service';
import { Marcos_Historicos, Slider } from '../../Interfaces/InterfacesDados';

export interface Imagens {
  imgSource: string;
  titulo?: string;
  descricao?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, TimelineModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slideAtivo: string = '';

  abrirSlider(sliderClicado: string) {
    this.slideAtivo = sliderClicado;
  }

  listaDeMarcosHistoricos: Marcos_Historicos[] = [];

  listaDeSlides: Slider[] = [];

  constructor(private http: BuscaHttpService) {
    this.getListaDeMarcosHistoricos();
    this.buscarListaDeSliders();
  }

  buscarListaDeSliders(): void{
    this.http.buscarSliders().subscribe({
      next: (listaDeSlides) => (this.listaDeSlides = listaDeSlides),
      error: (err) => console.error(err),
    })
  }

  getListaDeMarcosHistoricos(): void {
    this.http.buscaDeMomentosHistoricos().subscribe({
      next: (listaDeMarcosHistoricos) =>
        (this.listaDeMarcosHistoricos = listaDeMarcosHistoricos),
      error: (err) => console.error(err),
    });
  }

  images: any[] | undefined = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
