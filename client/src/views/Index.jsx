import { useState } from "react";

const Index = ({ teams }) => {
  const [alternate, setAlternate] = useState(true);

  const OrderNumbersM = [11, 2, 3, 10, 13, 1, 6, 8, 9, 7, 5, 4];

  const OrderNumbersF = [18, 19, 15, 17, 14, 16];

  const OrderFecha2M = [2, 7, 6, 3, 8, 10, 11, 13, 4, 12, 9, 1];

  const OrderFecha2F = [18, 17, 15, 14, 16, 19];

  const resultados = [
    "1-2",
    "5-2",
    "3-7",
    "1-3",
    "5-1",
    "3-4",
    "1-1",
    "7-0",
    "5-0",
  ];

  const fecha2M = [];

  const orderTeamsFecha2M = teams
    .filter((team) => team.teamId < 14 && team.teamId !== 5)
    .sort(
      (a, b) => OrderFecha2M.indexOf(a.teamId) - OrderFecha2M.indexOf(b.teamId)
    );

  for (let i = 0; i < orderTeamsFecha2M.length; i += 2) {
    const enfrentamiento = [orderTeamsFecha2M[i], orderTeamsFecha2M[i + 1]];
    fecha2M.push(enfrentamiento);
  }

  const fecha2F = [];

  const orderTeamsFecha2F = teams
    .filter((team) => team.teamId > 13)
    .sort(
      (a, b) => OrderFecha2F.indexOf(a.teamId) - OrderFecha2F.indexOf(b.teamId)
    );

  for (let i = 0; i < orderTeamsFecha2F.length; i += 2) {
    const enfrentamiento = [orderTeamsFecha2F[i], orderTeamsFecha2F[i + 1]];
    fecha2F.push(enfrentamiento);
  }

  const orderTeamsM = teams
    .filter((team) => team.teamId < 14 && team.teamId !== 12)
    .sort(
      (a, b) =>
        OrderNumbersM.indexOf(a.teamId) - OrderNumbersM.indexOf(b.teamId)
    );

  const gamesM = [];

  for (let i = 0; i < orderTeamsM.length; i += 2) {
    const enfrentamiento = [orderTeamsM[i], orderTeamsM[i + 1]];
    gamesM.push(enfrentamiento);
  }

  const orderTeamsF = teams
    .filter((team) => team.teamId > 13)
    .sort(
      (a, b) =>
        OrderNumbersF.indexOf(a.teamId) - OrderNumbersF.indexOf(b.teamId)
    );

  const gamesF = [];

  for (let i = 0; i < orderTeamsF.length; i += 2) {
    const enfrentamiento = [orderTeamsF[i], orderTeamsF[i + 1]];
    gamesF.push(enfrentamiento);
  }

  return (
    <div className="container">
      {/* <button onClick={() => console.log(fecha2F)}>O</button> */}
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
        <section
          className={alternate ? "fechas select-show" : "fechas select-hide"}
        >
          <div className="fechas-header">
            <h2 className="fecha">Clausura - Fecha 2</h2>
          </div>
          <div className="fechas-body">
            <p>Sábado 26 de agosto</p>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />
              {fecha2M &&
                fecha2M.map((game, index) => {
                  const hours = [
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "21:30",
                    "22:00",
                  ];
                  return (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {game[0].name}{" "}
                        <img
                          className="img-left"
                          src={game[0].shieldUrl}
                          alt=""
                        />{" "}
                      </p>
                      <span>{hours[index]}</span>
                      <p className="text-right">
                        <img
                          className="img-right"
                          src={game[1].shieldUrl}
                          alt=""
                        />
                        {game[1] ? game[1].name : "S/N"}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              {fecha2F &&
                fecha2F.map((game, index) => {
                  const hours = ["18:30", "19:30", "20:30"];
                  return (
                    <div className="vs" key={index}>
                      <p className="text-left">
                        {game[0].name}{" "}
                        <img
                          className="img-left"
                          src={game[0].shieldUrl}
                          alt=""
                        />{" "}
                      </p>
                      <span>{hours[index]}</span>
                      <p className="text-right">
                        <img
                          className="img-right"
                          src={game[1].shieldUrl}
                          alt=""
                        />
                        {game[1] ? game[1].name : "S/N"}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <section className={alternate ? "select-hide" : "games select-show"}>
          <div className="fechas-header">
            <h2 className="fecha">Clausura - Fecha 1</h2>
          </div>
          <div className="section-masc">
            <p className="masculino">Masculino</p>
            <hr />
            {gamesM &&
              gamesM.map((game, index) => {
                return (
                  <div className="vs" key={index}>
                    <p className="text-left">
                      {game[0].name}{" "}
                      <img
                        className="img-left"
                        src={game[0].shieldUrl}
                        alt=""
                      />{" "}
                    </p>
                    <span>{resultados[index]}</span>
                    <p className="text-right">
                      <img
                        className="img-right"
                        src={game[1].shieldUrl}
                        alt=""
                      />
                      {game[1] ? game[1].name : "S/N"}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="section-fem">
            <p className="femenino">Femenino</p>
            <hr />
            {gamesF &&
              gamesF.map((game, index) => {
                return (
                  <div className="vs" key={index}>
                    <p className="text-left">
                      {game[0].name}
                      <img
                        className="img-left"
                        src={game[0].shieldUrl}
                        alt=""
                      />
                    </p>
                    <span>{resultados[index + 6]}</span>
                    <p className="text-right">
                      <img
                        className="img-right"
                        src={game[1].shieldUrl}
                        alt=""
                      />
                      {game[1] ? game[1].name : "S/N"}
                    </p>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
