import Lista from "../props/lista";
import Erro from "../props/erro";
import { useState } from "react";
import '../css/renderizacao.css'

export default function Renderizacao(){
    const [tarefas, setTarefas] = useState(["Limpar casa", "Varrer chão", "Lavar louça"]);
    const [adicionar, setAdicionar] = useState("");

    function Adicionar(){
        setTarefas([...tarefas, adicionar]);
    };

    return(
        <div className="container">
            <h1 className="titulo">Lista de tarefas</h1>
            <div className="lista">
                {tarefas != "" ? <Lista tarefas={tarefas}/> : <Erro/>}
            </div>
            <div className="controles">
                <input className="input" type="text" placeholder="Adicionar Tarefas" onChange={(e)=>setAdicionar(e.target.value)}/>
            </div>
            <button className="btnTarefas" onClick={Adicionar}>Adicionar</button>
            <button className="btnTarefas" onClick={()=>setTarefas("")}>Limpar Tarefas</button>
        </div>
    );
};