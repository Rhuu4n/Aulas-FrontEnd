import { useState } from 'react';
import '../css/msg_limit.css';

export default function MsgLimit() {
    const [curtidas, setCurtidas] = useState(0);
    const [alerta, setAlerta] = useState("");

    function adiciona() {
        setCurtidas(curtidas + 1);

        verificaCurtidas();
    }

    function verificaCurtidas(){
        if(curtidas >= 4){
            setAlerta("Curtidas em alta!")
        }
    }
    

    return (
        <div className="msg-limit">

            <p className="msg-limit__alerta">{alerta}</p>
            <button className="msg-limit__botao" onClick={adiciona}>{curtidas}Curtidas</button>
        
        </div>
    );
}
