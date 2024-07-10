import Posicao from "./Posicao";
import "./Tabela.scss"


function Tabela(props) {
  const competicoes = Array.from(new Set(props.times.map(time => time.description)));
  const competicoesCores = {}
  competicoes.forEach((competicao, index) => {
    if(competicao && competicao.toLowerCase().includes("relegation")){
      competicoesCores[competicao] = "#ff0000";
      return;
    }
    if(competicao === null){
      competicoesCores[competicao] = "#808080";
      return;
    }
    if(index === 0){
      competicoesCores[competicao] = "#00008b";
      return;
    }
    if(index === 1){
      competicoesCores[competicao] = "#00777e";
      return;
    }
    if(index === 2){
      competicoesCores[competicao] = "#00ffff";
      return;
    }
    if(index === 3){
      competicoesCores[competicao] = "#add8e6";
      return;
    }
    if(competicao){
      competicoesCores[competicao] = "#" + Math.floor(Math.random()*16777215).toString(16);
      return;
    }
    competicoesCores[competicao] = "#808080";
  });

  props.times.sort((a, b) => a.rank - b.rank)

  return (
    <div className="tabela">
      {props.times.map((time, index) => (
        <Posicao
          key={index}
          index={index}
          img={time.team.logo}
          name={time.team.name}
          pontos={time.points}
          status={time.status}
          posicao={time.rank}
          corClassificacao={competicoesCores[time.description]}
        ></Posicao>
      ))}
    </div>
  );
}

export default Tabela;
