
export type Foto = {
    src: string;
    titulo: string;
}

export default interface Produto{
    id: string;
    fotos: Foto[];
    nome: string;
    preco: string;
    descricao: string;
    vendido: string;
    usuario_id: string;
}