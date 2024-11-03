import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Listaprodutos from "../components/ListaProdutos"

export default function Home() {
    return (
        <div>
            <Listaprodutos/>
        </div>
    )
}