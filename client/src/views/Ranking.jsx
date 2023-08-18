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
            .filter((team) => team.teamId < 14)
            .map((team) => {
              return (
                <tr key={team.teamId}>
                  <td className="td-center">0</td>
                  <td>
                    <img src={team.shieldUrl} alt="" />
                    {team.name}
                  </td>
                  <td className="td-center">0</td>
                  <td className="td-center">0</td>
                  <td className="table-pts td-center">0</td>
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
            .map((team) => {
              return (
                <tr key={team.teamId}>
                  <td className="td-center">0</td>
                  <td>
                    <img src={team.shieldUrl} alt="" />
                    {team.name}
                  </td>
                  <td className="td-center">0</td>
                  <td className="td-center">0</td>
                  <td className="table-pts td-center">0</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
