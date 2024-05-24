"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
              <p className="card-text fw-medium">Quantidade total: 10</p>
              <p className="card-text fw-medium">
                Valor total: R${(1500).toFixed(2)}
              </p>
            </div>
          </div> 
        </div>

        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos />
        </div>
      </main>
    </>
  );
}