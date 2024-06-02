import "bootstrap/dist/css/bootstrap.min.css";
import React, { Dispatch } from "react";
import { Action } from "../types/carrinho";

interface ItemCarrinhoProps {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    açoesItemDoCarrinhoProps: Dispatch<Action>;
}

export default function ItemCarrinho({ id, nome, preco, quantidade, açoesItemDoCarrinhoProps: açoesItemDoCarrinhoProps }: ItemCarrinhoProps) {
    const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;
    return (
        <tr key={id}>
            <td>{nome}</td>
            <td>R$ {(preco).toFixed(2)}</td>
            <td>
                <button className="btn btn-secondary btn-sm me-2" onClick={()=>açoesItemDoCarrinhoProps({type:"diminuir_qtd", id:id})}>-</button>
                {quantidade}
                <button className="btn btn-secondary btn-sm ms-2" onClick={()=>açoesItemDoCarrinhoProps({type:"aumentar_qtd", id:id})}>+</button>
            </td>
            <td>R$ {valorTotalProduto(preco, quantidade).toFixed(2)}</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={()=>açoesItemDoCarrinhoProps({type:"remover", id:id})}>
                    Remover
                </button>
            </td>
        </tr>
    );
}