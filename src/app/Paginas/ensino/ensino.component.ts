import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartData, TooltipItem } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-ensino',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './ensino.component.html',
  styleUrl: './ensino.component.css',
})
export class EnsinoComponent implements OnInit {
  informacoesGrafico1AbandonoEscolar: any;
  graficoDoAbandonoEscolar: any;
  grafico3: any;
  opcoesGrafico3: any;
  opcoesgraficoDoAbandonoEscolarComparacaoEnsinoSuperior: any;
  informacoesGrafico3NivelDeEscolaridade: any;
  opcoesGrafico3NivelDeEscolaridade: any;

  basicOptions: any;

  ngOnInit() {
    this.informacoesGrafico1AbandonoEscolar = {
      labels: [2016, 2019, 2022, 2023],
      datasets: [
        {
          label: 'Total',
          data: [68.2, 71.3, 75.2, 75.0],
          backgroundColor: '#14887c',
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
        {
          label: 'Homem',
          data: [68.2, 71.3, 75.2, 75.0],
          backgroundColor: '#b83f3d',
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
        {
          label: 'Mulher',
          data: [73.3, 76.1, 79.7, 78.2],
          backgroundColor: '#703328',
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
        {
          label: 'Branco',
          data: [76.0, 79.4, 80.8, 80.5],
          backgroundColor: '#4a6cac',
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
        {
          label: 'Pretos ou Pardos',
          data: [63.1, 66.7, 71.7, 71.5],
          backgroundColor: '#ecccbc',
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
      ],
    };

    this.graficoDoAbandonoEscolar = {
      labels: ['Homem', 'Mulher', 'Branca', 'Preta ou parda'],
      datasets: [
        {
          label: 'Percentual (%)',
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          data: [58.1, 41.9, 27.4, 71.6],
        },
      ],
    };

    this.opcoesgraficoDoAbandonoEscolarComparacaoEnsinoSuperior = {
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

    this.grafico3 = {
      labels: [
        'Total', 'Homem', 'Mulher', 'Branca', 'Preta ou parda',  // Sexo e cor ou raça
        '15 a 17 anos', '18 a 24 anos', '25 a 29 anos'             // Grupos de idade
      ],
      datasets: [
        {
          label: 'Estudava ou se qualificava (Ocupada)',
          backgroundColor: '#4bc0c0',
          data: [15.3, 14.6, 16.3, 18.4, 13.2, 11.3, 18.0, 13.8]
        },
        {
          label: 'Não estudava nem se qualificava (Ocupada)',
          backgroundColor: '#ff6384',
          data: [39.4, 47.3, 31.3, 39.3, 39.5, 81.2, 39.4, 59.2]
        },
        {
          label: 'Estudava ou se qualificava (Não ocupada)',
          backgroundColor: '#ff9f40',
          data: [25.5, 23.9, 25.6, 26.4, 24.9, 5.1, 18.8, 8.4]
        },
        {
          label: 'Não estudava nem se qualificava (Não ocupada)',
          backgroundColor: '#36a2eb',
          data: [19.8, 14.2, 26.8, 15.8, 22.4, 2.3, 24.0, 22.3]
        }
      ]
    };

    this.opcoesGrafico3 = {
      indexAxis: 'y', // Definir o gráfico como barras horizontais
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          max: 100 // Como os dados estão em porcentagem
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context: { dataset: { label: any; }; raw: any; }) {
              return `${context.dataset.label}: ${context.raw}%`;
            }
          }
        }
      }
    };
  }
}
