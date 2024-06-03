"use client";

import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";




export default function App() {
  return (
    <main>
      <div className="container p-5">
        <ListagemProdutos produtos={mockProdutos} />
      </div>
    </main>
  );
}
