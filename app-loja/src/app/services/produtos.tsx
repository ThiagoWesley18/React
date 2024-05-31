import api from "./api";
import Produto from "../types/produto"

export async function getListaProdutos(): Promise<Produto[]>{
    return api.get("/produto").then((response) => response.data);
}

export async function getDetalhesProduto(nomeProduto:string[] | string): Promise<Produto>{
    return api.get(`/produto/${nomeProduto}`).then((response) => response.data);
}