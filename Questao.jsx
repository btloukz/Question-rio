import {useState} from 'react'
import './index.css'

export default function Questao(props){
    const [resposta, setResposta] = useState(null)
    const [texto, setTexto] = useState(null)

    const answer=(RespostaDoUser)=>{
        setResposta(RespostaDoUser);
        if(RespostaDoUser==props.resposta){
            setTexto("Correto rapaz!")
            props.alteraObjetoComResposta(false)
        } else {
            setTexto("Errado bizonho!")
            props.alteraObjetoComResposta(true)
        }
    }

    return <div className="pergunta">
        <br/>
        {props.pergunta}<br/><br/>
        <button disabled={resposta!==null} onClick={()=>answer(true)}>Verdadeiro</button>
        <br/>
        <button disabled={resposta!==null} onClick={()=>answer(false)}>Falso</button>
        <br/>
        <br/>
        {texto}
    </div>
}
