const Games = require("../models/game.model");
const Team = require("../models/team.model");

const getGames = (req, res) => {
  Games.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addGame = (req, res) => {
  console.log(req.body);
  Games.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addResult = async (req, res) => {
  const { body } = req;
  const game = body[2];
  const local = body[0];
  const visitor = body[1];

  const getData = async (game, local, visitor) => {
    const localGoals = await game.localGoals;
    const visitorGoals = await game.visitorGoals;

    const localTeam = local;
    const visitorTeam = visitor;

    if (localGoals > visitorGoals) {
      localTeam.points += 2;
    } else if (localGoals === visitorGoals) {
      localTeam.points += 1;
      visitorTeam.points += 1;
    } else {
      visitorTeam.points += 2;
    }

    localTeam.played += 1;
    visitorTeam.played += 1;
    localTeam.diff += localGoals - visitorGoals;
    visitorTeam.diff += visitorGoals - localGoals;

    return [localTeam, visitorTeam];
  };

  const final = await getData(game, local, visitor);

  const localUpdated = final[0];
  const visitorUpdated = final[1];

  Games.findOneAndUpdate(
    {
      gameId: game.gameId,
    },
    {
      localGoals: game.localGoals,
      visitorGoals: game.visitorGoals,
    }
  ).then((res) => console.log("Juego actualizado correctamente"));

  Team.findOneAndUpdate(
    { teamId: localUpdated.teamId },
    {
      points: localUpdated.points,
      diff: localUpdated.diff,
      played: localUpdated.played,
    }
  ).then(
    Team.findOneAndUpdate(
      { teamId: visitorUpdated.teamId },
      {
        points: visitorUpdated.points,
        diff: visitorUpdated.diff,
        played: visitorUpdated.played,
      }
    ).then(res.json("Equipo local y visitante actualizado"))
  );
};

module.exports = {
  addGame,
  getGames,
  addResult,
};
