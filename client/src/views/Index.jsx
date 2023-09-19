import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Index = ({ teams, games }) => {
  useEffect(() => {}, []);
  const [alternate, setAlternate] = useState(true);

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

        <section className={alternate ? "games select-show" : "select-hide"}>
          <h1>Aún no están disponibles los partidos de la fecha 5</h1>
        </section>
        <section className={alternate ? "select-hide" : "games select-show"}>
          <article className="fechas">
            <div className="fechas-header">
              <h2 className="fecha">Clausura - Fecha 4</h2>
            </div>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />

              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "masculino" && game.date === 4
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "femenino" && game.date === 4
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
          </article>
          <article className="fechas">
            <div className="fechas-header">
              <h2 className="fecha">Clausura - Fecha 3</h2>
            </div>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />

              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "masculino" && game.date === 3
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "femenino" && game.date === 3
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
          </article>
          <article className="fechas">
            <div className="fechas-header">
              <h2 className="fecha">Clausura - Fecha 2</h2>
            </div>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />

              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "masculino" && game.date === 2
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "femenino" && game.date === 2
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
          </article>
          <article className="fechas">
            <div className="fechas-header">
              <h2 className="fecha">Clausura - Fecha 1</h2>
            </div>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />
              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "masculino" && game.date === 1
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              {games.length > 0 &&
                games
                  .filter(
                    (game) => game.categorie === "femenino" && game.date === 1
                  )
                  .map((game, index) => {
                    return (
                      <div className="vs" key={index}>
                        <p className="text-left">
                          {
                            teams.find((team) => team.teamId === game.local)
                              .name
                          }
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
                    );
                  })}
            </div>
          </article>
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
