import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React from "react";
import Produto from "../types/produto";
import { useRouter } from "next/navigation";
interface CardProdutoProps {
    itemProduto: Produto;
    adicionarAoCarrinho: (produto: Produto) => void;

}

export default function CardProduto({itemProduto, adicionarAoCarrinho}: CardProdutoProps){
    const router = useRouter();
        
    const verDetalhesProduto = (produtoid: string) => {
        router.push(`/produto/${produtoid}`);
    }

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
                        <button className="btn btn-light d-block w-100 mt-2" type="button" onClick={()=>verDetalhesProduto(itemProduto.id)}>
                            Ver detalhes
                        </button>;
                        <button className="btn btn-dark d-block w-100" type="button" onClick={()=>adicionarAoCarrinho(itemProduto)} >
                            Adicionar no carrinho
                        </button>
                    </div>
                </div>
            </div>
    );
}