import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardProduto from "./CardProduto";
import Produto from "../types/produto";

interface ListaProdutosProps {
    produtos: Produto[];
    adicionarAoCarrinhoProps: (produto: Produto) => void;
}

export default function ListagemProdutos({produtos, adicionarAoCarrinhoProps}: ListaProdutosProps) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {
                produtos.length > 0 ? produtos.map((item) => {
                    return <CardProduto key={item.id} itemProduto={item} adicionarAoCarrinho={adicionarAoCarrinhoProps}/>;
                }) : null
            }
                
            </div>
        </div>
  );
}