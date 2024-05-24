"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";

export default function Produtos() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho />
        </div>

        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos />
        </div>
      </main>
    </>
  );
}