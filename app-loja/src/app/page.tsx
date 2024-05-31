"use client";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import Produto from "./types/produto";
import { useListaProdutos } from "./hooks/useListaProdutos";

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

  const {produto, isPending, isError} = useListaProdutos();
  if (isPending) {
    return <div>Carregando...</div>
  }
  if (isError) {
    return <div>Erro ao carregar os produtos</div>
  }
  if(produto){
    if (produto.length < 0) {
      return <div>Não há produtos disponíveis</div>
    }else{
      return (
        <>
          <main>
            <div className="container p-5">
             
              <ResumoCarrinho quantidadeTotal={itensCarrinho} valorTotal={valorTotal} />
              
            </div>
    
            <div className="container p-5">
              <h5 className="mb-3">Produtos disponíveis:</h5>
              <ListagemProdutos produtos={produto} adicionarAoCarrinhoProps={adicionarAoCarrinho} />
            </div>
          </main>
        </>
      );
    }
  }
 
  
}