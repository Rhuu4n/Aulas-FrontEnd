import { useEffect, useState } from "react";
import "../css/aviso.css"

export default function Aviso() {
    const [tempo, setTempo] = useState(0);
    const [bemVindo, setBemVindo] = useState("visible");
    const [botao, setBotao] = useState("collapse");
    
    useEffect(()=>{
        const intervalo = setInterval(() => {
        setTempo((i) => i + 1); }, 1000,);
        
        return () => clearInterval(intervalo);    
        
    }, []);
    
    useEffect(()=>{
        if(tempo === 3){
            Mostrar();
        };}, [tempo]);
    
    
    function Mostrar(){
        setBemVindo("collapse");
        setBotao("visible");
    };

    return(
        <div className="aviso-container">
            <p className="aviso-mensagem" style={{visibility: bemVindo}}>BEM VINDO!!!</p>
            <p className="aviso-mensagem" style={{visibility: bemVindo}}>{tempo}</p>
            <a className="aviso-botao" style={{visibility: botao}} href="../">Voltar</a>
        </div>
    );
}