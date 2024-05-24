"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemCarrinho from "../components/ListagemCarrinho";

export default function Carrinho() {
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <ListagemCarrinho />
              
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
              <p className="card-text fw-medium">Quantidade total: 7</p>
              <p className="card-text fw-medium">
                Valor total: R${(10500).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}