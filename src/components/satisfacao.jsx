import { useState } from "react";
import "../css/satisfacao.css"

export default function Satisfacao(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [satisfacao, setSatisfacao] = useState(1);
    const [comentario, setComentario] = useState("");
    const [termos, setTermos] = useState(false);

    function EnviarDados(){
        let dados = {
            "nome": nome.target.value,
            "email": email.target.value,
            "satisfacao": satisfacao,
            "comentario": comentario.target.value
        };

        console.log(dados);
    };

    return(
        <div className="satisfacao-container">
            <h1 className="satisfacao-titulo">Loja Virtual</h1>
            <div className="satisfacao-form">
                <p className="satisfacao-campo">Nome: <input onChange={(e)=> setNome(e)}></input></p>
                <p className="satisfacao-campo">Email: <input onChange={(e)=> setEmail(e)}></input></p>
                <span>Satisfação:</span>
                <div className="satisfacao-opcoes">

                    <label className="satisfacao-opcao">
                        <input type="radio" name="satisfacao" value="insatisfeito" onChange={()=> setSatisfacao(0)}/> Insatisfeito
                    </label>
                    <label className="satisfacao-opcao">
                        <input type="radio" name="satisfacao" value="neutro" onChange={()=> setSatisfacao(1)}/> Neutro
                    </label>
                    <label className="satisfacao-opcao">
                        <input type="radio" name="satisfacao" value="satisfeito" onChange={()=> setSatisfacao(2)}/> Satisfeito
                    </label>

                </div>

                <p className="satisfacao-campo" onChange={(e)=> setComentario(e)}>Comentário: <textarea className="satisfacao-comentario" rows="6" placeholder="Digite seu comentário..."></textarea></p>
                
                <label className="satisfacao-termos">
                    <input type="checkbox" onChange={(e)=> setTermos(e.target.checked)}/>Aceito os termos
                </label>
                
                <button className="satisfacao-botao" disabled={!termos} onClick={EnviarDados} >Enviar FeedBack</button>
            </div>
        </div>
    );
};