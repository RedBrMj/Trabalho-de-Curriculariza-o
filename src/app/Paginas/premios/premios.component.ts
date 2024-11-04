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
  pessoas_premiadas?: Premiacoes[] = [
    {
      nome: 'Célia Regina',
      descricao: 'Professora',
      data: '18 de novembro de 2022',
      detalhes:
        'Nesta sexta-feira (18), às 19h30 na Câmara Municipal de Assis, acontece a entrega do Diploma de Mérito “Zumbi dos Palmares”, prêmio outorgado pelo Zimbauê, Instituto do Negro de Assis, a sessão solene irá homenagear a professora Célia Regina Pedro do Nascimento. O diploma reflete sobre ações de personalidades negras do município de Assis, que atuam contra o preconceito e desigualdade racial com ações de compartilhamentos, istórias e vitórias.',
      imagem: 'CELIA_REGINA',
    },
    {
      nome: 'Claudomiro de Souza',
      descricao: '',
      data: '18 de novembro de 2022',
      detalhes:
        "A Câmara Municipal de Assis realizou nesta quinta-feira, dia 06, uma Sessão Solene para a entrega do Diploma de Mérito 'Zumbi dos Palmares' ao Senhor Claudomiro de Souza. O Diploma é concedido por meio do Decreto Legislativo nº 330, de 14 de julho de 2015 de autoria dos vereadores Reinaldo Farto Nunes, Edson de Souza e demais Vereadores.",
      imagem: 'CLAUDOMIRO_SOUZA',
    },
    {
      nome: 'Benedito Francisco de Souza',
      descricao: '',
      data: '06 de janeiro de 2021',
      detalhes:
        'A cerimônia foi realizada na quinta-feira (30), às 19h de 2023, no auditório do Sindicato dos Empregados em Edifícios de Santos (Sindedif), que fica na Rua Júlio Conceição, 240, Encruzilhada. Ente as indicações, há uma homenagem póstuma a Edson Arantes do Nascimento, o Rei Pelé, que morreu em 29 de dezembro do ano passado, uma das maiores lendas do esporte global.',
      imagem: 'BENEDITO_FREDERICO',
    },
    {
      nome: 'Dr. Eduardo Henrique Amâncio de Souza',
      descricao: '',
      data: '18 de novembro de 2021',
      detalhes:
        'Dr. Eduardo é Promotor Público, nascido em Presidente Prudente e filho de Delegado de Polícia aposentado. O homenageado também já recebeu o Título Honorífico de Cidadão Assisense da Câmara Municipal em 2006.',
      imagem: 'EDUARDO_HENRIQUE',
    },
    {
      nome: 'Mônica da Silva',
      descricao: '',
      data: '05 de dezembro de 2020',
      detalhes:
        'A Câmara Municipal de Assis entregou, durante a Sessão Ordinária desta segunda-feira,05 de dezembro, através de Ato Solene da Mesa Diretora o Diploma de Mérito "Zumbi dos Palmares - 2016" para Mônica da Silva, membro ativo do Instituto do Negro (Zimbauê)',
      imagem: 'MONICA_SILVA',
    },
    {
      nome: 'Vicente de Melo',
      descricao: '',
      data: '13 de novembro de 202',
      detalhes:
        '"Eu sempre falo, homenagear as pessoas pretas é uma tarefa diária, pois nossa história foi apagada ao longo de todos esses anos. Então quando a Câmara Municipal de Assis presta todo esse trabalho, nós agradecemos. E por mais uma vez parabenizo a presidente Viviane Del Massa, que proporcionou mais essa homenagem", concluiu.',
      imagem: 'VICENTE_MELO',
    },
  ];
  pessoa_selecionada?: Premiacoes;

  public showDialog(pessoa: Premiacoes) {
    this.visible = true;
    this.pessoa_selecionada = pessoa;
  }

  constructor() {}
}
