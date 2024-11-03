import { useEffect, useState } from "react";
import styles from "../css/Home.module.css";

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch("https://fakestoreapi.com/products");
                const dados = await resposta.json();
                setProdutos(dados);
            } catch {
                alert("deu erro ai");
            }
        };
        receberListaProdutos();
    }, []);

    return (
        <>
            <header>Loja do Mago Highlander</header>
            <div className={styles.cards}>
                {produtos.map((produto) => (
                    <div className={styles.card} key={produto.id}>
                        <img
                            className={styles.imga}
                            src={produto.image}
                            alt={produto.title}
                            width={"100%"}
                            height={300}
                        />
                        <h2>{produto.title}</h2>
                        <p>Preço: R${produto.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}