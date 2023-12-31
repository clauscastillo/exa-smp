const Team = require("../models/team.model");
const User = require("../models/user.model");
const SECRET = process.env.KEYJWT;

const getTeams = async (req, res) => {
  Team.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addPlayer = (req, res) => {
  Team.findOne({ teamId: req.body.teamId })
    .then((response) => {
      const players = response.players;
      console.log(players);
      Team.findOneAndUpdate(
        { teamId: req.body.teamId },
        {
          players: [...players, req.body],
        }
      )
        .then((respon) => res.json(respon))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

const addTeam = (req, res) => {
  Team.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addTeams = (req, res) => {
  req.body.map((team) => {
    Team.create(team)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
};

const editStats = (req, res) => {
  const { body } = req;
  console.log(body);
  for (const team of body) {
    Team.findOneAndUpdate(
      { teamId: team.teamId },
      { points: team.points, diff: team.diff, played: team.played }
    )
      .then(
        console.log(
          "Equipo con ID" + team.teamId + " Actualizado correctamente"
        )
      )
      .catch((err) => res.json(err));
  }
};

module.exports = {
  getTeams,
  addTeam,
  addPlayer,
  addTeams,
  editStats,
};
