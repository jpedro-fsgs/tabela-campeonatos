import "./Posicao.scss";
import sound from "../assets/sound.mp3";

function Posicao(props) {
  function handleDoubleClick(nome) {
    if (["Corinthians", "Tottenham"].includes(nome)) {
      new Audio(sound).play();
      setTimeout(
        () =>
          alert(
            nome == "Corinthians"
              ? `⭐ Vai Corinthians ⭐`
              : `⭐ Come On You Spurs ⭐`
          ),
        100
      );
      return;
    }
    if (
      ["Palmeiras", "Sao Paulo", "Santos", "Arsenal", "Chelsea"].includes(nome)
    ) {
      setTimeout(() => alert("🗑️"), 100);
      return;
    }
  }

  return (
    <div
      className={"posicao " + (props.index % 2 ? "par" : "impar")}
      style={{ borderLeft: "10px solid " + props.corClassificacao }}
      onDoubleClick={(e) => handleDoubleClick(props.name)}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div className={props.status}></div>
        <h2 className="numero-posicao">{props.posicao}</h2>
        <img className="time-img" src={props.img} />
      </span>
      <h2 className="nome-time">{props.name}</h2>
      <span className="pontos">
        <p>Pontos: </p>
        <strong>{props.pontos}</strong>
      </span>
    </div>
  );
}

export default Posicao;
