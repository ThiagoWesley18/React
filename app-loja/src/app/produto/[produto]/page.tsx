"use client";
import Image from "next/image";
import Produtos from "../../types/produto";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import Cardproduto from "../../components/detalhesProduto";
import {Foto} from "../../types/produto";

const Produto = () => {
    const [produto, setProduto] = useState<Produtos | null>(null);
    const parans = useParams();
    const nomeProduto = parans.produto;

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            try{
                const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`);
                if(!ignore && response.ok){
                    const data = await response.json();
                    setProduto(data);
                }
            }catch(error){
                console.log(error);
            }
        }
        fetchData(); 
        return () => {
            ignore = true;
        }
    },[nomeProduto]);

    if (!produto){
        return (
            <Cardproduto  />
        );
    }else{
        return (
            <div className="container p-5">
                <div className="card mb-4">
                    <div className="card-img-top" >
                        {
                            (produto.fotos ? produto.fotos : []).map((fotoItem) => {
                                return <Imagens foto={fotoItem} key={fotoItem.titulo} />;
                            })
                        }
                    </div>
                    
                    
                    <div className="card-body">
                        <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>
            
                        <h5 className="card-title mb-4 fw-bold">{produto.nome}</h5>
            
                        <p className="card-text fw-medium">
                        Valor: R${Number(produto.preco).toFixed(2)}
                        </p>
                        <p className="card-text fw-medium">Descrição: {produto.descricao}</p>
                        <p className="card-text fw-medium">Anunciado por:{produto.usuario_id}</p>
                    </div>
                </div>
            </div>
          );
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

