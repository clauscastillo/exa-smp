import { PropTypes } from "prop-types";
import { useEffect } from "react";

function GamesOfDate({ games, teams, fechaActual, fecha }) {
  // Ordenar los juegos por fecha
  const gamesOrdenated = games.sort((a, b) => b.date - a.date);
  // Crear un objeto para almacenar los juegos segmentados por fecha
  const juegosSegmentados = {};

  // Iterar a través de los juegos totales y agruparlos por fecha
  gamesOrdenated.forEach((juego) => {
    const name = "fecha N-" + juego.date;

    // Si aún no existe una clave para esa fecha, crea un arreglo vacío
    if (!juegosSegmentados[name]) {
      juegosSegmentados[name] = [];
    }

    // Agrega el juego al arreglo correspondiente a la fecha
    juegosSegmentados[name].push(juego);
  });

  // Ahora juegosSegmentados contiene los juegos agrupados por fecha

  // Renderiza los juegos segmentados en la interfaz de usuario
  return (
    <div>
      {!fecha &&
        Object.keys(juegosSegmentados)
          .filter((fechas) => Number(fechas[fechas.length - 1]) !== fechaActual)
          .map((fechas) => (
            <article key={fechas}>
              <div className="fechas-header">
                <h2 className="fecha">
                  Clausura - Fecha {fechas[fechas.length - 1]}
                </h2>
              </div>
              <div className="section-masc">
                <p className="masculino">Masculino</p>
                <hr />
                {juegosSegmentados[fechas]
                  .filter((game) => game.categorie === "masculino")
                  .map((game, index) => (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {teams.find((team) => team.teamId === game.local).name}
                        <img
                          src={
                            teams.find((team) => team.teamId === game.local)
                              .shieldUrl
                          }
                          alt=""
                          className="img-left"
                        />
                      </p>
                      <span>
                        {game.localGoals}-{game.visitorGoals}
                      </span>
                      <p className="text-right">
                        <img
                          src={
                            teams.find((team) => team.teamId === game.visitor)
                              .shieldUrl
                          }
                          alt=""
                          className="img-right"
                        />
                        {
                          teams.find((team) => team.teamId === game.visitor)
                            .name
                        }
                      </p>
                    </div>
                  ))}
              </div>

              <div className="section-fem">
                <p className="femenino">Femenino</p>
                <hr />
                {juegosSegmentados[fechas]
                  .filter((game) => game.categorie === "femenino")
                  .map((game, index) => (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {teams.find((team) => team.teamId === game.local).name}
                        <img
                          src={
                            teams.find((team) => team.teamId === game.local)
                              .shieldUrl
                          }
                          alt=""
                          className="img-left"
                        />
                      </p>
                      <span>
                        {game.localGoals}-{game.visitorGoals}
                      </span>
                      <p className="text-right">
                        <img
                          src={
                            teams.find((team) => team.teamId === game.visitor)
                              .shieldUrl
                          }
                          alt=""
                          className="img-right"
                        />
                        {
                          teams.find((team) => team.teamId === game.visitor)
                            .name
                        }
                      </p>
                    </div>
                  ))}
              </div>
            </article>
          ))}

      {fecha &&
        Object.keys(juegosSegmentados)
          .filter((fechas) => Number(fechas[fechas.length - 1]) === fechaActual)
          .map((fechas) => (
            <article key={fechas}>
              <div className="fechas-header">
                <h2 className="fecha">
                  Clausura - Fecha {fechas[fechas.length - 1]}
                </h2>
              </div>
              <div className="section-masc">
                <p className="masculino">Masculino</p>
                <hr />
                {juegosSegmentados[fechas]
                  .filter((game) => game.categorie === "masculino")
                  .map((game, index) => (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {teams.find((team) => team.teamId === game.local).name}
                        <img
                          src={
                            teams.find((team) => team.teamId === game.local)
                              .shieldUrl
                          }
                          alt=""
                          className="img-left"
                        />
                      </p>
                      <span>{game.hour}</span>
                      <p className="text-right">
                        <img
                          src={
                            teams.find((team) => team.teamId === game.visitor)
                              .shieldUrl
                          }
                          alt=""
                          className="img-right"
                        />
                        {
                          teams.find((team) => team.teamId === game.visitor)
                            .name
                        }
                      </p>
                    </div>
                  ))}
              </div>

              <div className="section-fem">
                <p className="femenino">Femenino</p>
                <hr />
                {juegosSegmentados[fechas]
                  .filter((game) => game.categorie === "femenino")
                  .map((game, index) => (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {teams.find((team) => team.teamId === game.local).name}
                        <img
                          src={
                            teams.find((team) => team.teamId === game.local)
                              .shieldUrl
                          }
                          alt=""
                          className="img-left"
                        />
                      </p>
                      <span>{game.hour}</span>
                      <p className="text-right">
                        <img
                          src={
                            teams.find((team) => team.teamId === game.visitor)
                              .shieldUrl
                          }
                          alt=""
                          className="img-right"
                        />
                        {
                          teams.find((team) => team.teamId === game.visitor)
                            .name
                        }
                      </p>
                    </div>
                  ))}
              </div>
            </article>
          ))}
    </div>
  );
}

GamesOfDate.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GamesOfDate;
