import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React from "react";

interface CardProdutoProps {
    key: string;
    fotos: { titulo: string; src: string };
    nome: string;
    preco: string;
    descricao: string;

}

export default function CardProduto({key, fotos, nome, preco, descricao}: CardProdutoProps){
    return (
            <div className="col">
                <div className="card shadow-sm h-100">
                    <Image
                        src={fotos.src}
                        className="card-img-top"
                        alt={fotos.titulo}
                        width={300}
                        height={320}
                    />

                    <div className="card-body bg-light">
                        <h5 className="card-title">{nome}</h5>
                        <p className="card-text text-secondary">R$ {preco}</p>
                        <p className="card-text text-secondary">{descricao}</p>
                        <button className="btn btn-dark d-block w-100" type="button">
                        Adicionar no carrinho
                        </button>
                    </div>
                </div>
            </div>
    );
}