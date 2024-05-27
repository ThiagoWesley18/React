"use client";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import {mockProdutos} from "./mocks/produtos";
import Produto from "./types/produto";

export default function Produtos() {
  const [itensCarrinho, setItensCarrinho] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto):void => {
    setItensCarrinho(
      (itemAnterior) => itemAnterior + 1
    );
    setValorTotal(
      (valorTotalAnterior) => valorTotalAnterior + Number(produto.preco) 
    );
  }

  return (
    <>
      <main>
        <div className="container p-5">
         
          <ResumoCarrinho quantidadeTotal={itensCarrinho} valorTotal={valorTotal} />
          
        </div>

        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos produtos={mockProdutos} adicionarAoCarrinhoProps={adicionarAoCarrinho} />
        </div>
      </main>
    </>
  );
}