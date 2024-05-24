import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default function ItemCarrinho() {
    const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;
    return (
        <>
            <tr key="1">
                <td>Notebook 1</td>
                <td>R$ {(1500).toFixed(2)}</td>
                <td>2</td>

                <td>R$ {valorTotalProduto(1500, 2).toFixed(2)}</td>
                <td>
                <button className="btn btn-danger btn-sm">
                    Remover
                </button>
                </td>
            </tr>

            <tr key="1">
                <td>Notebook 2 </td>
                <td>R$ {(1500).toFixed(2)}</td>
                <td>2</td>

                <td>R$ {valorTotalProduto(1500, 2).toFixed(2)}</td>
                <td>
                <button className="btn btn-danger btn-sm">
                    Remover
                </button>
                </td>
            </tr>

            <tr key="1">
                <td>Notebook 3</td>
                <td>R$ {(1500).toFixed(2)}</td>
                <td>3</td>

                <td>R$ {valorTotalProduto(1500, 3).toFixed(2)}</td>
                <td>
                <button className="btn btn-danger btn-sm">
                    Remover
                </button>
                </td>
            </tr>
        </>
    );
}