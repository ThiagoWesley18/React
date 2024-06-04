"use client";
import React, { createContext, Dispatch, useState, useContext } from "react";

interface IfavoritosContext {
    favorito: Produto[];
    setFavoritos: Dispatch<React.SetStateAction<Produto[]>>;
  }
  
  export const favoritosContext = createContext<IfavoritosContext>({
    favorito: [],
    setFavoritos: () => {},
  });

 const FavoritosProvider = ({ children }: { children: React.ReactNode }) => {
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

export const useFavoritosContext = () =>{
    const contextFavorito = useContext(favoritosContext );
    return contextFavorito;
}

export const useProdutosFavoritos = () => {
    const { favorito } = useFavoritosContext();
    return favorito;
}

export const useVerificaProdutoFavorito = (id:String) =>{
    const { favorito } = useFavoritosContext();
    return favorito.some((item) => item.id === id);
} 