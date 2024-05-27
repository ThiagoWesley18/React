import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React from "react";
import Produto from "../types/produto";

interface CardProdutoProps {
    itemProduto: Produto;
    adicionarAoCarrinho: (produto: Produto) => void;

}

export default function CardProduto({itemProduto, adicionarAoCarrinho}: CardProdutoProps){
    return (
            <div className="col">
                <div className="card shadow-sm h-100">
                    <Image
                        src={itemProduto.fotos[0].src}
                        className="card-img-top"
                        alt={itemProduto.fotos[0].titulo}
                        width={300}
                        height={320}
                    />

                    <div className="card-body bg-light">
                        <h5 className="card-title">{itemProduto.nome}</h5>
                        <p className="card-text text-secondary">R$ {itemProduto.preco}</p>
                        <p className="card-text text-secondary">{itemProduto.descricao}</p>
                        <button className="btn btn-dark d-block w-100" type="button" onClick={()=>adicionarAoCarrinho(itemProduto)} >
                        Adicionar no carrinho
                        </button>
                    </div>
                </div>
            </div>
    );
}