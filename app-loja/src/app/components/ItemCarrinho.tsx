import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

interface ItemCarrinhoProps {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    removerItemDoCarrinhoProps: (id: string)=> void;
}

export default function ItemCarrinho({ id, nome, preco, quantidade, removerItemDoCarrinhoProps }: ItemCarrinhoProps) {
    const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;
    return (
        <tr key={id}>
            <td>{nome}</td>
            <td>R$ {(preco).toFixed(2)}</td>
            <td>{quantidade}</td>

            <td>R$ {valorTotalProduto(preco, quantidade).toFixed(2)}</td>
            <td>
            <button className="btn btn-danger btn-sm" onClick={()=>removerItemDoCarrinhoProps(id)}>
                Remover
            </button>
            </td>
        </tr>
    );
}