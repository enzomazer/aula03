import { useEffect, useState } from "react";

export default function Home() {


    useEffect(() => {
        const receberListaProdutos = async () => {
            try {

            } catch (erro) {

            }
        }
        receberListaProdutos();
    }, []);

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>{produto.title}</p>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100}/>
                    </li>
                ))}
            </ul>
        </>
    );
}