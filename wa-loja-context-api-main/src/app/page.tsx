"use client";

import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import FavoritosProvider from "./state/favoritosPrivider";
import { mockProdutos } from "./mocks/produtos";




export default function App() {
  return (
    <main>
      <div className="container p-5">
        <FavoritosProvider>
        <ListagemProdutos produtos={mockProdutos} />
        </FavoritosProvider>
      </div>
    </main>
  );
}
