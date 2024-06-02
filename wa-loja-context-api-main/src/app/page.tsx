"use client";

import { useState, createContext, Dispatch} from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";

interface IfavoritosContext {
  favorito: Produto[];
  setFavoritos: Dispatch<React.SetStateAction<Produto[]>>;
}

export const favoritosContext = createContext<IfavoritosContext>({
  favorito: [],
  setFavoritos: () => {},
});

export default function App() {
  const produto = mockProdutos;
  const [favorito, setFavoritos] = useState<Produto[]>([]);

  return (
    <main>
      <div className="container p-5">
        <favoritosContext.Provider value={{favorito, setFavoritos}}>
        <ListagemProdutos
          produtos={produto}
        />
        </favoritosContext.Provider>
      </div>
    </main>
  );
}
