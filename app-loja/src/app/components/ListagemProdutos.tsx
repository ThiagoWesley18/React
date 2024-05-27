import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardProduto from "./CardProduto";
import Produto from "../types/produto";

interface ListaProdutosProps {
    produtos: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
}

export default function ListagemProdutos({produtos, adicionarAoCarrinho}: ListaProdutosProps) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {produtos.map((item) => {
                    return <CardProduto key={item.id} itemProduto={item} adicionarAoCarrinho={adicionarAoCarrinho}/>;
                })}
                
            </div>
        </div>
  );
}