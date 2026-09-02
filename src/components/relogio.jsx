import { useEffect, useState } from "react";
import '../css/relogio.css';
 
 export default function Relogio(){
    const [segundos, setSegundos] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{

        const intervalo = setInterval(() => {
        setSegundos((i) => i + 1); 
        }, 1000,);
        
        return () => clearInterval(intervalo);
        
    }, []);

    if(segundos > 9){
        setTime(new Date().toLocaleTimeString());
        setSegundos(0);
    }

    return(
        <div className="relogio-container">
            <h1 className="relogio-titulo">Relógio</h1>
            <div className="relogio-visor">
                <span>{time.charAt(0)}</span>
                <span>{time.charAt(1)}</span>
                <span className="piscar">{time.charAt(2)}</span>
                <span>{time.charAt(3)}</span>
                <span>{time.charAt(4)}</span>
                <span className="piscar">{time.charAt(5)}</span>
                <span className="segundos">{time.charAt(6)}</span>
                <span className="segundos">{segundos}</span>
            </div>
        </div>
    );
 }