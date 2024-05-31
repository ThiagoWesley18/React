"use client";
import Image from "next/image";
import { useParams } from "next/navigation"
import Cardproduto from "../../components/detalhesProduto";
import {Foto} from "../../types/produto";
import {useDetalhesProdutos} from "../../hooks/useDetalhesProduto";

const Produto = () => {
    const parans = useParams();
    const nomeProduto = parans.produto;

    const {produto: produtoDetalhes, isPending, isError} = useDetalhesProdutos(nomeProduto);

    if(produtoDetalhes){
        if(produtoDetalhes.nome == null){
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontWeight: 'bold', fontSize:"20px" }} >
                    Produto não encontrado!
                </div>
            );
        }else{
        return (
            <div className="container p-5">
                <div className="card mb-4">
                    <div className="card-img-top" >
                        {
                            (produtoDetalhes.fotos ? produtoDetalhes.fotos : []).map((fotoItem) => {
                                return <Imagens foto={fotoItem} key={fotoItem.titulo} />;
                            })
                        }
                    </div>
                    
                    
                    <div className="card-body">
                        <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>
            
                        <h5 className="card-title mb-4 fw-bold">{produtoDetalhes.nome}</h5>
            
                        <p className="card-text fw-medium">
                        Valor: R${Number(produtoDetalhes.preco).toFixed(2)}
                        </p>
                        <p className="card-text fw-medium">Descrição: {produtoDetalhes.descricao}</p>
                        <p className="card-text fw-medium">Anunciado por:{produtoDetalhes.usuario_id}</p>
                    </div>
                </div>
            </div>
        );
    }
    }

    if (isPending) {
        return <Cardproduto />;
    }

    if (isError) {
        return <div>Erro ao carregar os produtos</div>
    }

};

interface ImagensProps {
    foto: Foto
}
const Imagens = ({foto}:ImagensProps) => {
    return (
        <Image
        src={foto.src}
        alt={foto.titulo}
        width={300}
        height={320}
    />
    );
}

export default Produto;

