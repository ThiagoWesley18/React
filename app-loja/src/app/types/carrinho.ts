

export default interface ItemCarrinho {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
  }

  export type State = {
    itensCarrinho: ItemCarrinho[];
  }
  export type Action = { type: "aumentar_qtd"; id: string} | { type: "diminuir_qtd"; id: string} | { type: "remover"; id: string};

  