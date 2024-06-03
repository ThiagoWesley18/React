import React, { createContext, Dispatch, useState } from "react";
import { mockProdutos } from "../mocks/produtos";

interface IfavoritosContext {
    favorito: Produto[];
    setFavoritos: Dispatch<React.SetStateAction<Produto[]>>;
  }
  
  export const favoritosContext = createContext<IfavoritosContext>({
    favorito: [],
    setFavoritos: () => {},
  });

 const FavoritosProvider = ({ children }: { children: React.ReactNode }) => {
    const produto = mockProdutos;
    const [favorito, setFavoritos] = useState<Produto[]>([]);

    const values = {
        favorito,
        setFavoritos,
    };

    return (
        <favoritosContext.Provider value={values}>
            {children}
        </favoritosContext.Provider>
    );
}

export default FavoritosProvider;