import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";
import "./App.scss"

import { ligas } from "./assets/leagueData";


import { useState } from "react";
import Selector from "./components/Selector";



function App() {
  const [league, setLeague] = useState(ligas[Object.keys(ligas)[0]]);
  const [season, setSeason] = useState(ligas[Object.keys(ligas)[0]][0]);
  document.title = league[0].response[0].league.name;
  return (
    <div className="container">
      <Selector league={league} setLeague={setLeague} season={season} setSeason={setSeason}/>
      <Titulo liga={season.response[0].league}/>
      <Tabela times={season.response[0].league.standings[0]}/>
    </div>
  );
}

export default App;
