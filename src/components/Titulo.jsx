import "./Titulo.scss"


function Titulo(props){
    return(
        <div className="titulo">
            <img src={props.liga.flag}/>
            <h1>{props.liga.name} {props.liga.season}{props.liga.id !== 71 && "/" + (props.liga.season + 1)}</h1>
            <img src={props.liga.logo}/>
        </div>
    )
}

export default Titulo;