import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ItemCarrinho from "./ItemCarrinho";

export default function ListagemCarrinho() {
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
                    <ItemCarrinho />
                </tbody>
            </table>
        </div>
    );    
}