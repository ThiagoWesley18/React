"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";

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

          <ResumoCarrinho />
        </div>
      </main>
    </>
  );
}