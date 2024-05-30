"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";
import {mockItensCarrinho} from "../mocks/carrinho";
import ItemCarrinho from "../types/carrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState<null | ItemCarrinho[]>(mockItensCarrinho);

  const removerItemDoCarrinho = (id: string):void => {
    const novoCarrinho = (itensCarrinho ? itensCarrinho : []).filter((item) => item.id !== id);
    setItensCarrinho(novoCarrinho);
  };

  let valorTotal = 0;
  (itensCarrinho ? itensCarrinho : []).forEach((item) => {
    valorTotal += item.preco * item.quantidade;
  })

  let quantidadeTotal = 0;
  (itensCarrinho ? itensCarrinho : []).forEach((item) => {
    quantidadeTotal += item.quantidade;
  })

  
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <ListagemCarrinho produto={itensCarrinho ? itensCarrinho : []} removerItemDoCarrinhoProps={removerItemDoCarrinho}  />
              
            </div>
          </div>

          <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
        </div>
      </main>
    </>
  );
}