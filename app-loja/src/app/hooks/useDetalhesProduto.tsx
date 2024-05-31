import {getDetalhesProduto} from "../services/produtos";
import {useQuery} from "@tanstack/react-query"

export const useDetalhesProdutos = (nomeProduto:string[] | string) => {
    const {data, isPending, isError} = useQuery({queryKey: ["listaProdutos"], queryFn: () => getDetalhesProduto(nomeProduto)});
    return {produto: data, isPending, isError};
}