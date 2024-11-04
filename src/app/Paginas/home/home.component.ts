import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { Formulario } from '../../Interfaces/formulario';
import { Marcos_Historicos, Slider } from '../../Interfaces/InterfacesDados';
import { BuscaHttpService } from '../../services/busca-http.service';

export interface Imagens {
  imgSource: string;
  titulo?: string;
  descricao?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GalleriaModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    ToastModule,
    InputMaskModule,
  ],
  providers: [MessageService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() dadosFormulario!: Formulario;
  cadastro!: FormGroup;

  slideAtivo: string = '';

  abrirSlider(sliderClicado: string) {
    this.slideAtivo = sliderClicado;
  }

  fecharSlider(){
    this.slideAtivo = '';
  }

  listaDeSlides: Slider[] = [
    {
      titulo: "Tipificação do racismo como crime",
      descricao: "A Lei 14.532/2023, publicada em janeiro deste ano, equipara a injúria racial ao crime de racismo. Com isso, a pena tornou-se mais severa com reclusão de dois a cinco anos, além de multa, não cabe mais fiança e o crime é imprescritível.",
      imgSource: "injuriaracial",
    },
    {
      titulo: "Lei de Cotas",
      descricao: "Esta lei garante o acesso à vagas nas universidades públicas para a população negra.",
      imgSource: "leidecostas",
    },
    {
      titulo: "Lei Áurea",
    descricao: "A Lei Áurea, também conhecida como Lei n.º 3.353, foi sancionada pela Princesa Isabel em 13 de maio de 1888 e determinou a abolição da escravidão no Brasil. A lei foi resultado de um projeto que tramitou rapidamente no Congresso, após seis dias de debate.",
      imgSource: "leiaurea",
    },
    {
      titulo: "Revolta da Chibata",
      descricao: "A Revolta da Chibata foi um motim organizado pelos soldados da Marinha brasileira de 22 a 27 de novembro de 1910. A revolta organizada pelos marinheiros ocorreu em embarcações da Marinha que estavam atracadas na Baía de Guanabara e foi motivada, principalmente, pela insatisfação dos marinheiros com os castigos físicos.",
      imgSource: "revoltadachibata",
    },
    {
      titulo: "Lei do Ventre Livre",
      descricao: "A Lei do Ventre Livre foi uma lei abolicionista promulgada no Brasil em 1871 que determinou que os filhos de escravas nascidas a partir de sua data de aprovação seriam libertos",
      imgSource: "ventrelivre",
    }
  ];

  constructor(
    private http: BuscaHttpService,
    private fb: FormBuilder,
    private toast: MessageService
  ) {
    this.abrirSlideAleatorio();
  }

  public abrirSlideAleatorio(): void {
    const i = Math.floor(Math.random() * this.listaDeSlides.length);
    if(i >= 0){
      this.abrirSlider(this.listaDeSlides[i]?.titulo);
    }
  }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      email: [
        this.dadosFormulario?.email || '',
        [Validators.required, Validators.minLength(10), this.emailValidator()],
      ],
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      idade: ['', [Validators.required, this.validarIdade()]],
    });
  }

  public emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const valid = emailRegexp.test(control.value);
      return valid ? null : { invalidEmail: { value: control.value } };
    };
  }

  public validarIdade(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const idade = control.value;
      const idadeMinima = 18;
      if (!idade || isNaN(idade)) {
        return { idadeInvalida: true };
      }
      return idade >= idadeMinima ? null : { idadeInvalida: { value: idade } };
    };
  }

  enviarCadastro(): any {
    if (this.cadastro.valid) {
      const informacoes = this.cadastro.value;
      this.http.enviarSolicitacao(informacoes).subscribe({
        next: (res) => {
          this.toast.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Solicitação de cadastro enviada!',
          });
        },
        error: (err) => {
          this.toast.add({
            severity: 'error',
            summary: 'Problema',
            detail: 'Erro ao solicitar cadastro!',
          });
          console.error(err);
        },
      });
    } else {
      console.log('Erro');
    }
  }
}
