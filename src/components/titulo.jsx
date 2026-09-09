import { useState } from "react";
import "../css/titulo.css"

export default function Titulo(){
    const[titulo, setTitulo] = useState("Título Dinâmico da Página");

    return(
        <div className="titulo-container">
            <h1 className="titulo-texto">{titulo}</h1>
            <input className="titulo-input" onChange={(e)=> setTitulo(e.target.value)}></input>
        </div>
    );
};