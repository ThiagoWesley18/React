import "bootstrap/dist/css/bootstrap.min.css";
import React, { Dispatch } from "react";
import ItemCarrinho from "./ItemCarrinho";
import Carrinho from "../types/carrinho";
import { Action } from "../types/carrinho";

interface ListagemCarrinhoProps {
    produto: Carrinho[];
    removerItemDoCarrinhoProps: Dispatch<Action>;
}


export default function ListagemCarrinho({produto,removerItemDoCarrinhoProps}: ListagemCarrinhoProps) {
    return (
        <div className="table-responsive">
            <table className="table ">
                <thead>
                <tr>
                    <th>Produto</th>
                    <th>Valor Unitário</th>
                    <th>Quantidade</th>
                    <th>Valor Total</th>
                    <th>Opções</th>
                </tr>
                </thead>
                <tbody>
                    {
                        produto.map((item) => {
                            return  (
                                <ItemCarrinho 
                                    key={item.id} 
                                    id={item.id} 
                                    nome={item.nome} 
                                    preco={item.preco} 
                                    quantidade={item.quantidade} 
                                    açoesItemDoCarrinhoProps={removerItemDoCarrinhoProps}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );    
}