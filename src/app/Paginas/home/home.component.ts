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

  listaDeSlides: Slider[] = [];

  constructor(
    private http: BuscaHttpService,
    private fb: FormBuilder,
    private toast: MessageService
  ) {
    this.buscarListaDeSliders();
    this.abrirSlideAleatorio();
  }

  public buscarListaDeSliders(): void {
    this.http.buscarSliders().subscribe({
      next: (listaDeSlides) => (this.listaDeSlides = listaDeSlides),
      error: (err) => console.error(err),
    });
  }

  public abrirSlideAleatorio(): void {
    const i = Math.floor(Math.random() * this.listaDeSlides.length);
    if(i >= 0){
      this.abrirSlider(this.listaDeSlides[i]?.titulo);
    }
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
