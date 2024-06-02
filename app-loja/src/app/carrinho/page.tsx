"use client";
import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";
import {mockItensCarrinho} from "../mocks/carrinho";
import {Action, State} from "../types/carrinho";



function reduce(state:State, action:Action) {
  switch(action.type) {
    case "aumentar_qtd":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.map((item) => {
            if(item.id === action.id) {
              return {
                ...item,
                quantidade: item.quantidade + 1
              }
            }
            return item;
        })
      }
    case "diminuir_qtd":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.map((item) => {
            if((item.id === action.id) && (item.quantidade > 0)) {
              return {
                ...item,
                quantidade: item.quantidade - 1
              }
            }
            return item;
        })
      }
    case "remover":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.filter((item) => item.id !== action.id)
      }
    default:
      throw new Error();
  }
}


export default function Carrinho() {
  const [state, dispatch] = useReducer(reduce, {itensCarrinho: mockItensCarrinho});



  let valorTotal = 0;
  (state.itensCarrinho ? state.itensCarrinho : []).forEach((item) => {
    valorTotal += item.preco * item.quantidade;
  })
  
  let quantidadeTotal = 0;
  (state.itensCarrinho ? state.itensCarrinho: []).forEach((item) => {
    quantidadeTotal += item.quantidade;
  })

  
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <ListagemCarrinho produto={state.itensCarrinho? state.itensCarrinho : []} removerItemDoCarrinhoProps={dispatch}  />
              
            </div>
          </div>

          <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
        </div>
      </main>
    </>
  );
}