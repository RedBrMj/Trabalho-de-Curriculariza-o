import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Eventos } from '../../Interfaces/InterfacesDados';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {

  constructor() {
  }

  eventosDisponiveis: Eventos[] = [
    {
      titulo: "Semana da Consciência Negra",
      descricao: "O Instituto organiza e participa ativamente de diversos eventos durante a Semana da Consciência Negra, como palestras, debates, apresentações culturais e oficinas.",
      local: "Assis Sp-Brasil",
      imgSource: "conciencia_negra.jpg",
    },
    {
      titulo: "Feira Literária de Assis",
      descricao: "O Zimbauê participa da Feira Literária de Assis, oferecendo oficinas e atividades culturais que valorizam a literatura afro-brasileira.",
      local: "Assis Sp-Brasil",
      imgSource: "feira_literaria.jpg",
    },
    {
      titulo: "Homenagem a Zumbi dos Palmares",
      descricao: "O Instituto realiza eventos em homenagem a Zumbi dos Palmares, um dos maiores líderes da resistência negra no Brasil, contribuindo para a valorização da história e da cultura afro-brasileira.",
      local: "Assis Sp-Brasil",
      imgSource: "zumbi_dos_palmares.jpg",
    },
    {
      titulo: "Eventos culturais",
      descricao: "O Zimbauê organiza e participa de eventos culturais como feiras, saraus e apresentações musicais, proporcionando um espaço para a expressão artística e a valorização da cultura afro-brasileira.",
      local: "Assis Sp-Brasil",
      imgSource: "eventos_culturais.jpg",
    },
    {
      titulo: "Parcerias com outras instituições",
      descricao: "A Lei 14.532/2023, publicada em janeiro deste ano, equipara a injúria racial ao crime de racismo. Com isso, a pena tornou-se mais severa com reclusão de dois a cinco anos, além de multa, não cabe mais fiança e o crime é imprescritível.",
      local: "Assis Sp-Brasil",
      imgSource: "parecerias.jpg",
    }
  ];
}
