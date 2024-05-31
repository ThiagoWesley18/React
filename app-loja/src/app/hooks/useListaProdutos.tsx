import {getListaProdutos} from "../services/produtos";
import {useQuery} from "@tanstack/react-query"

export const useListaProdutos = () => {
    const {data, isPending, isError} = useQuery({queryKey: ["listaProdutos"], queryFn: () => getListaProdutos()});
    return {produto: data, isPending, isError};
}