import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

const Team = ({ teams }) => {
  const params = useParams();

  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/playersForTeam/" + params.id)
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));

    const selectedTeam = teams.filter(
      (team) => team.teamId === Number(params.id)
    );

    setSelected(selectedTeam[0]);
  }, []);

  return (
    <div>
      <div className="team-title">
        <img src={selected.shieldUrl} alt="" width={"100px"} />
        <h1>{selected.name}</h1>
      </div>
      <hr />
      <div className="players">
        <h3 className="title-players">Jugadores</h3>
        <ul className="list">
          {players
            .sort((a, b) => a.number - b.number)
            .map((player) => {
              return (
                <>
                  <li key={player._id} className="player-list">
                    <img src="../assets/players/jugador.jfif" alt="" />
                    <p>{player.number}</p>
                    <p>{player.name}</p>
                  </li>
                  <hr className="div-players" />
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

Team.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Team;
