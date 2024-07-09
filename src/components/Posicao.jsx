import "./Posicao.scss"



function Posicao(props){
    function handleClick(e){
        console.log(e.target.innerText)
    }
    function handleDoubleClick(e){
        alert(e.target.innerText)
    }
    
    return(
        <div 
        className={"posicao " + (props.index % 2 ? "par":"impar")} 
        style={{borderLeft: "10px solid " + props.corClassificacao}}
        onClick={(e) => handleClick(e)}
        onDoubleClick={(e) => handleDoubleClick(e)}
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