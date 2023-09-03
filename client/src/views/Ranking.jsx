import { useState, useEffect } from "react";
import axios from "axios";

const Ranking = ({ teams }) => {
  const [alternate, setAlternate] = useState(true);

  return (
    <div>
      <div className="select">
        <div
          className={alternate ? "selected" : "not-selected"}
          onClick={() => setAlternate(true)}
        >
          Masculino
        </div>
        <div
          className={alternate ? "not-selected" : "selected"}
          onClick={() => setAlternate(false)}
        >
          Femenino
        </div>
      </div>
      <table className={alternate ? "select-show" : "select-hide"}>
        <caption className="table-title masculino">Masculino</caption>
        <tbody>
          <tr>
            <td className="group" colSpan={5}>
              Grupo A
            </td>
          </tr>
          <tr>
            <th>Posición</th> <th>Equipo</th>
            <th>PJ</th>
            <th>DG</th>
            <th>Pts</th>
          </tr>
          {teams
            .filter((team) => team.teamId < 14 && team.group === "A")
            .sort((a, b) => {
              if (a.points === b.points) {
                return b.diff - a.diff; // Ordenar de mayor a menor por posición 2 si posición 0 es igual
              } else {
                return b.points - a.points; // Ordenar de mayor a menor por posición 0
              }
            })
            .map((team, index) => {
              return (
                <tr key={team.teamId}>
                  <td className="td-center">{index + 1}</td>
                  <td className="center">
                    <img src={team.shieldUrl} alt="" />
                    {team.name}
                  </td>
                  <td className="td-center">{team.played}</td>
                  <td className="td-center">{team.diff}</td>
                  <td className="table-pts td-center">{team.points}</td>
                </tr>
              );
            })}
          <tr>
            <td className="group" colSpan={5}>
              Grupo B
            </td>
          </tr>
          <tr>
            <th>Posición</th> <th>Equipo</th>
            <th>PJ</th>
            <th>DG</th>
            <th>Pts</th>
          </tr>
          {teams
            .filter((team) => team.teamId < 14 && team.group === "B")
            .sort((a, b) => {
              if (a.points === b.points) {
                return b.diff - a.diff; // Ordenar de mayor a menor por posición 2 si posición 0 es igual
              } else {
                return b.points - a.points; // Ordenar de mayor a menor por posición 0
              }
            })
            .map((team, index) => {
              return (
                <tr key={team.teamId}>
                  <td className="td-center">{index + 1}</td>
                  <td className="center">
                    <img src={team.shieldUrl} alt="" />
                    {team.name}
                  </td>
                  <td className="td-center">{team.played}</td>
                  <td className="td-center">{team.diff}</td>
                  <td className="table-pts td-center">{team.points}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <table className={alternate ? "select-hide" : "select-show"}>
        <caption className="table-title femenino">Femenino</caption>
        <thead>
          <tr>
            <th>Posición</th> <th>Equipo</th>
            <th>PJ</th>
            <th>DG</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {}
          {teams
            .filter((team) => team.teamId > 13)
            .sort((a, b) => {
              if (a.points === b.points) {
                return b.diff - a.diff; // Ordenar de mayor a menor por posición 2 si posición 0 es igual
              } else {
                return b.points - a.points; // Ordenar de mayor a menor por posición 0
              }
            })
            .map((team, index) => {
              return (
                <tr key={team.teamId}>
                  <td className="td-center">{index + 1}</td>
                  <td>
                    <img src={team.shieldUrl} alt="" />
                    {team.name}
                  </td>
                  <td className="td-center">{team.played}</td>
                  <td className="td-center">{team.diff}</td>
                  <td className="table-pts td-center">{team.points}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
