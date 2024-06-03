import ItemFavorito from "../ItemFavorito/ItemFavorito";
import { favoritosContext } from "../../state/favoritosPrivider";
import { useContext } from "react";



export default function ListagemFavoritos() {
  const { favorito , setFavoritos} = useContext(favoritosContext);
  return (
    <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">Lista de favoritos:</h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {favorito.map((item) => (
                <ItemFavorito
                  key={item.id}
                  itemFavorito={item}
                  setFavoritos={setFavoritos}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
