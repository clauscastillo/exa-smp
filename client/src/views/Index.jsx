import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import GamesOfDate from "../components/GamesOfDate";

const Index = ({ teams, games }) => {
  const [alternate, setAlternate] = useState(true);
  const [date, setDate] = useState(false);
  const fechaActual = 6;

  useEffect(() => {
    const gameTest = games.sort((a, b) => b.date - a.date)[0];

    if (gameTest.date === fechaActual) {
      setDate(true);
    }
  }, []);

  return (
    <div className="container">
      <main>
        <section>
          <div className="select">
            <div
              className={alternate ? "selected" : "not-selected"}
              onClick={() => setAlternate(true)}
            >
              Fechas
            </div>
            <div
              className={alternate ? "not-selected" : "selected"}
              onClick={() => setAlternate(false)}
            >
              Partidos
            </div>
          </div>
        </section>

        <section className={alternate ? "select-show" : "select-hide"}>
          {!date && (
            <h1>
              Aún no están disponibles los partidos de la fecha {fechaActual}
            </h1>
          )}
          {date && (
            <GamesOfDate
              games={games}
              teams={teams}
              fechaActual={fechaActual}
              fecha={true}
            />
          )}
        </section>
        <section className={alternate ? "select-hide" : "select-show"}>
          <GamesOfDate
            games={games}
            teams={teams}
            fechaActual={fechaActual}
            fecha={false}
          />
        </section>
      </main>
    </div>
  );
};

Index.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
