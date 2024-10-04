export interface local {
  local: string;
  porcentagem: number;
}

export interface Eventos {
  imgSource: string;
  titulo?: string;
  descricao?: string;
  local: string;
}

export interface Premiacoes {
  nome: string;
  data: string;
  imagem?: string;
  local: string;
  detalhes: string;
  descricao: string;
}
