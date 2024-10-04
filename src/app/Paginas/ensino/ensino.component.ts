import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartData, TooltipItem } from 'chart.js';

@Component({
  selector: 'app-ensino',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './ensino.component.html',
  styleUrl: './ensino.component.css',
})
export class EnsinoComponent implements OnInit {
  informacoesGrafico1AbandonoEscolar: any;
  informacoesGrafico2ComparacaoEnsinoSuperior: any;
  opcoesGrafico2ComparacaoEnsinoSuperior: any;
  informacoesGrafico3NivelDeEscolaridade: any;
  opcoesGrafico3NivelDeEscolaridade: any;

  basicOptions: any;

  ngOnInit() {
    this.informacoesGrafico1AbandonoEscolar = {
      labels: ['Brancos', 'Pretos e Pardos'],
      datasets: [
        {
          label: 'Abando Escolar(Em porcentagem)',
          data: [27, 71],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
          borderWidth: 1,
        },
      ],
    };
    this.informacoesGrafico2ComparacaoEnsinoSuperior = {
      labels: ['Brancos', 'Negros/Pardos'],
      datasets: [
        {
          type: 'bar',
          data: [29.5],
          borderColor: 'white',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          label: 'Brancos Estudando',
        },
        {
          type: 'bar',
          data: [6.5],
          borderColor: 'white',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          label: 'Brancos Formados',
        },
        {
          type: 'bar',
          data: [0, 16.4],
          borderColor: 'white',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderWidth: 2,
          label: 'Negros/Pardos Estudando',
        },
        {
          type: 'bar',
          data: [0, 2.9],
          borderColor: 'white',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderWidth: 2,
          label: 'Negros/Pardos Formados',
        },
      ],
    };

    this.opcoesGrafico2ComparacaoEnsinoSuperior = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {},
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem: TooltipItem<any>, data: ChartData) {
              const customLabels = ['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4'];
              const datasetLabel =
                data.datasets[tooltipItem.datasetIndex].label || '';
              return `${datasetLabel}: ${customLabels}`;
            },
          },
        },
      },
    };

    this.informacoesGrafico3NivelDeEscolaridade = {
      labels: ['Ensino Médio Completo', 'Ensino Superior'],
      datasets: [
        {
          label: 'Nivel De Escolaridade: Brancos - Em porcentagem( % )',
          data: [60, 16.5],
        },
        {
          label: 'Nivel De Escolaridade: Negros/Pardos - Em porcentagem( % )',
          data: [47, 10.8],
        },
      ],
    };
    this.opcoesGrafico3NivelDeEscolaridade = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {},
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              weight: 500,
            },
          },
          grid: {
            drawBorder: false,
          },
        },
        y: {
          ticks: {},
          grid: {
            drawBorder: false,
          },
        },
      },
    };
  }
}
