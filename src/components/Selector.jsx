import "./Selector.scss";
import { ligas } from "../assets/leagueData";
import { useState } from "react";

function Selector(props) {
  return (
    <>
      <select
        id="league"
        onChange={(e) => {
          props.setLeague(ligas[e.target.value]);
          props.setSeason(ligas[e.target.value][0]);

        }}
      >
        {Object.keys(ligas).map((liga) => {
          const dadosLiga = ligas[liga][0].response[0].league;
          return (
            <option
              value={liga}
              key={`${dadosLiga.country} ${dadosLiga.name}`}
            >{`${dadosLiga.country} ${dadosLiga.name}`}</option>
          );
        })}
      </select>

      <select
        id="season"
        onChange={(e) => props.setSeason(() => props.league[Number(e.target.value)])}
      >
        {props.league.map((season, index) => {
          const dadosLiga = season.response[0].league;
          return (
            <option
              value={index}
              key={`${dadosLiga.country} ${dadosLiga.name} ${dadosLiga.season}`}
            >
              {`${dadosLiga.country} ${dadosLiga.name} ${dadosLiga.season}${dadosLiga.id !== 71 ? "/" + (dadosLiga.season + 1): ""}`}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Selector;
