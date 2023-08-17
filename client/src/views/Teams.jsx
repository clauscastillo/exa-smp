import { useEffect, useState } from "react";
import axios from "axios";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data));
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => setTeams(res.data));
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(players);
          console.log(teams);
        }}
      >
        JAJJA
      </button>
    </div>
  );
};

export default Teams;
