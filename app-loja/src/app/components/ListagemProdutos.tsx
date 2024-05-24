import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardProduto from "./CardProduto";

export default function ListagemProdutos() {
    return (
        <div>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                <CardProduto />
            </div>
        </div>
  );
}