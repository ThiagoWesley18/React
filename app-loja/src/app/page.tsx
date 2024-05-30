"use client";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import Produto from "./types/produto";

export default function Produtos() {
  const [itensCarrinho, setItensCarrinho] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);
  const [produtos, setProdutos] = useState<Produto[] | null>([]);

  const adicionarAoCarrinho = (produto: Produto):void => {
    setItensCarrinho(
      (itemAnterior) => itemAnterior + 1
    );
    setValorTotal(
      (valorTotalAnterior) => valorTotalAnterior + Number(produto.preco) 
    );
  }

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch("https://ranekapi.origamid.dev/json/api/produto",{method: "GET"});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!ignore) {
          const data = await response.json();
          setProdutos(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
    
  },[]);

  return (
    <>
      <main>
        <div className="container p-5">
         
          <ResumoCarrinho quantidadeTotal={itensCarrinho} valorTotal={valorTotal} />
          
        </div>

        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos produtos={produtos ? produtos : []} adicionarAoCarrinhoProps={adicionarAoCarrinho} />
        </div>
      </main>
    </>
  );
}