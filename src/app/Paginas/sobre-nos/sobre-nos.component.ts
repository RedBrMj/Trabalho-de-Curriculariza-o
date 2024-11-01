import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css',
})
export class SobreNosComponent {
  missoesDoInstituto: any[] = [
    {
      titulo: "Inclusão",
      descricao: "No Instituto Negro Zimbaue, acreditamos que todos, independentemente de sua origem, cor, ou classe social, devem ter oportunidades iguais para desenvolver seu potencial. Nossa missão é criar espaços inclusivos que acolhem a diversidade e garantem que cada indivíduo seja ouvido e respeitado em nossa comunidade."
    },
    {
      titulo: "Respeito",
      descricao: "O respeito está no coração de tudo o que fazemos. Valorizamos a dignidade humana e promovemos um ambiente de empatia e consideração, onde as experiências e histórias da comunidade negra são reconhecidas e celebradas. Respeitar as diferenças é essencial para fortalecer os laços de solidariedade e construir uma sociedade mais justa."
    },
    {
      titulo: "Equidade",
      descricao: "Promovemos a equidade como um princípio fundamental para combater as desigualdades históricas que afetam a comunidade negra. Trabalhamos para garantir que todos tenham acesso a oportunidades justas e que as condições sociais e econômicas sejam transformadas para gerar igualdade real, não apenas em teoria."
    },
    {
      titulo: "Cultura",
      descricao: "A cultura negra é rica, diversa e vibrante, e o Instituto Negro Zimbaue se dedica a preservar, promover e celebrar essa herança. Valorizamos as tradições, a arte, a música, e os saberes ancestrais como pilares que fortalecem nossa identidade e nos conectam com nossas raízes, ao mesmo tempo em que construímos o futuro."
    },
    {
      titulo: "Autonomia",
      descricao: "Acreditamos no poder de capacitar indivíduos e comunidades para serem agentes de mudança em suas próprias vidas. Por meio da educação, formação e desenvolvimento de habilidades, buscamos promover a autonomia, para que cada pessoa possa alcançar sua independência e contribuir de forma significativa para a sociedade."
    },
  ];
}
