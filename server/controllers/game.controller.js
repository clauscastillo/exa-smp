const Game = require("../models/game.model");

const getGames = (req, res) => {
  Game.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addGame = (req, res) => {
  console.log(req.body);
  Game.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

module.exports = {
  addGame,
  getGames,
};
