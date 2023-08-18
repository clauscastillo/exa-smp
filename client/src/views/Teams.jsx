import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Teams = ({ teams }) => {
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
      <div className={alternate ? "select-show" : "select-hide"}>
        {teams
          .filter((team) => team.teamId < 14)
          .map((team) => {
            return (
              <Link key={team._id} to={"/equipos/" + team.teamId}>
                <div className="team" key={team._id}>
                  <img src={team.shieldUrl} alt="" height={"30px"} />
                  <p>{team.name}</p>
                </div>
              </Link>
            );
          })}
      </div>
      <div className={alternate ? "select-hide" : "select-show"}>
        {teams
          .filter((team) => team.teamId > 13)
          .map((team) => {
            return (
              <Link key={team._id} to={"/equipos/" + team.teamId}>
                <div className="team">
                  <img src={team.shieldUrl} alt="" height={"30px"} />
                  <p>{team.name}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Teams;
