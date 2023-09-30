import axios from "axios";
import { useEffect, useState } from "react";
import AddResult from "./AddResult";

const GamesAdmin = ({ teams }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/games")
      .then((res) => setGames(res.data));
  }, []);
  return (
    <div>
      <section className="games">
        {teams &&
          games
            .filter((game) => game.date === 6)
            .map((game) => {
              return (
                <div key={game._id} className="add-result">
                  <div className="vs">
                    <p className="text-left">
                      {teams.find((team) => team.teamId === game.local).name}
                    </p>
                    <span>VS</span>
                    <p className="text-right">
                      {teams.find((team) => team.teamId === game.visitor).name}
                    </p>
                  </div>
                  <AddResult teams={teams} game={game} />
                </div>
              );
            })}
      </section>
    </div>
  );
};

export default GamesAdmin;
