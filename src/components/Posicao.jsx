import "./Posicao.scss"
import sound from "../assets/sound.mp3"


function Posicao(props){

    function handleDoubleClick(nome){
        if(["Corinthians", "Tottenham"].includes(nome)){
            new Audio(sound).play();
            console.log(`⭐${nome}⭐`);
            return;
        }
        if(["Palmeiras", "Sao Paulo", "Santos", "Arsenal", "Chelsea"].includes(nome)){
            console.log("🗑️");
            return;
        }
    }
    
    return(
        <div 
        className={"posicao " + (props.index % 2 ? "par":"impar")} 
        style={{borderLeft: "10px solid " + props.corClassificacao}}
        onDoubleClick={(e) => handleDoubleClick(props.name)}
        >
            <span style={{display: "flex", alignItems: "center", gap: "15px"}}>
                <div className={props.status}></div>
                <h2>{props.posicao}</h2>
                <img src={props.img}/>
            </span>
            <h2>{props.name}</h2>
            <p>Pontos: <strong>{props.pontos}</strong></p>
        </div>
    )
}

export default Posicao;