const Player = require("../models/player.model");
const Teams = require("../models/team.model");

const getPlayers = (req, res) => {
  Player.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const getPlayer = (req, res) => {
  Player.findById()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addPlayer = (req, res) => {
  Player.create(req.body)
    .then((response) => {
      Teams.findOne({ teamId: response.teamId })
        .then((respon) => {
          Teams.findByIdAndUpdate(respon._id, {
            players: [...respon.players, response._id],
          }).then(res.json("Agregado con exito papichurro"));
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

module.exports = {
  getPlayers,
  getPlayer,
  addPlayer,
};
