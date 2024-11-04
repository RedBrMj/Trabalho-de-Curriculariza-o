export interface Eventos {
  imgSource: string;
  titulo?: string;
  descricao?: string;
  local: string;
}

export interface Premiacoes {
  nome: string;
  data: string;
  detalhes: string;
  descricao: string;
  imagem?: string;
}

export interface Slider{
  titulo: string;
  descricao: string
  imgSource: string;
}

export interface Marcos_Historicos{
  titulo: string; 
  data: string;
  descricao: string;
  image: string;
  link?: string;
}