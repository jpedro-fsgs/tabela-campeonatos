import "./Titulo.scss"


function Titulo(props){
    return(
        <div className="titulo">
            <img className="titulo-img" src={props.liga.flag}/>
            <h1 className="titulo-text">{props.liga.name} {props.liga.season}{![71, 72].includes(props.liga.id) && "/" + (props.liga.season + 1)}</h1>
            <img className="titulo-img" src={props.liga.logo}/>
        </div>
    )
}

export default Titulo;