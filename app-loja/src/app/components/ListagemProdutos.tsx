import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardProduto from "./CardProduto";
import {mockProdutos} from "../mocks/produtos";
export default function ListagemProdutos() {
    return (
        <div>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {mockProdutos.map((item) => {
                    return <CardProduto key={item.id} fotos={item.fotos[0]} nome={item.nome} preco={item.preco} descricao={item.descricao} />;
                })}
                
            </div>
        </div>
  );
}