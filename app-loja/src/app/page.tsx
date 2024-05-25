"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import {mockItensCarrinho} from "./mocks/carrinho";

export default function Produtos() {
  let valorTotal = 0;
  mockItensCarrinho.forEach((item) => {
    valorTotal += item.preco;
  })
  return (
    <>
      <main>
        <div className="container p-5">
         
          <ResumoCarrinho quantidadeTotal={mockItensCarrinho.length} valorTotal={valorTotal} />
          
        </div>

        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos />
        </div>
      </main>
    </>
  );
}