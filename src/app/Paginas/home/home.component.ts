import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BuscaHttpService } from '../../services/busca-http.service';

export interface Imagens {
  imgSource: string;
  titulo?: string;
  descricao?: string;
}

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, TimelineModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imagensDoSlider: Imagens[] = [
    {
      titulo: '',
      descricao: '',
      imgSource: 'https://linktr.ee/og/image/institutozimbaue.jpg',
    },
    {
      titulo: 'Titulo 2',
      descricao:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores tenetur cumque laborum optio! Ut, provident! Totam sit excepturi incidunt aspernatur? Veritatis, iusto ea nulla deserunt praesentium explicabo consequatur molestias, velit corrupti obcaecati, similique odio incidunt soluta nesciunt a harum tenetur distinctio optio sapiente consectetur quis sequi omnis? Necessitatibus, nihil accusamus.',
      imgSource: 'https://www.assiscity.com/img/2023/05/15/fileg_515794.jpg',
    },
    {
      titulo: 'Titulo 3',
      descricao:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores tenetur cumque laborum optio! Ut, provident! Totam sit excepturi incidunt aspernatur? Veritatis, iusto ea nulla deserunt praesentium explicabo consequatur molestias, velit corrupti obcaecati, similique odio incidunt soluta nesciunt a harum tenetur distinctio optio sapiente consectetur quis sequi omnis? Necessitatibus, nihil accusamus.',
      imgSource:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6K6XK26yUiZzAX_JwBj5yEVaOovK2XhBIUQ&s',
    },
  ];

  slideAtivo: string = '';

  abrirSlider(sliderClicado: string) {
    this.slideAtivo = sliderClicado;
  }

  listaDeMarcosHistoricos: any = [];

  listaDeSlides: any = [
    {
      titulo: 'Slide 1',
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veniam facere incidunt vel pariatur soluta minima dolores cupiditate id nesciunt maiores repudiandae voluptate, corporis autem enim iure a dicta beatae placeat commodi architecto consequatur quos deleniti animi. Totam vero, neque ea dignissimos enim, mollitia dolore quisquam, molestiae doloribus accusamus aliquam.'
    },
    {
      titulo: 'Slide 2',
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veniam facere incidunt vel pariatur soluta minima dolores cupiditate id nesciunt maiores repudiandae voluptate, corporis autem enim iure a dicta beatae placeat commodi architecto consequatur quos deleniti animi. Totam vero, neque ea dignissimos enim, mollitia dolore quisquam, molestiae doloribus accusamus aliquam.'
    },
    {
      titulo: 'Slide 3',
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veniam facere incidunt vel pariatur soluta minima dolores cupiditate id nesciunt maiores repudiandae voluptate, corporis autem enim iure a dicta beatae placeat commodi architecto consequatur quos deleniti animi. Totam vero, neque ea dignissimos enim, mollitia dolore quisquam, molestiae doloribus accusamus aliquam.'
    },
    {
      titulo: 'Slide 4',
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veniam facere incidunt vel pariatur soluta minima dolores cupiditate id nesciunt maiores repudiandae voluptate, corporis autem enim iure a dicta beatae placeat commodi architecto consequatur quos deleniti animi. Totam vero, neque ea dignissimos enim, mollitia dolore quisquam, molestiae doloribus accusamus aliquam.'
    },
    {
      titulo: 'Slide 5',
      descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veniam facere incidunt vel pariatur soluta minima dolores cupiditate id nesciunt maiores repudiandae voluptate, corporis autem enim iure a dicta beatae placeat commodi architecto consequatur quos deleniti animi. Totam vero, neque ea dignissimos enim, mollitia dolore quisquam, molestiae doloribus accusamus aliquam.'
    },
  ];

  events: EventItem[];

  constructor(private http: BuscaHttpService) {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
    this.getListaDeMarcosHistoricos();
    console.log(this.listaDeMarcosHistoricos);
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
