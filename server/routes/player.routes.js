const {
  getPlayers,
  getPlayer,
  addPlayer,
  addPlayers,
  getPlayersForTeam,
} = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", getPlayers);

  app.get("/api/player/:id", getPlayer);

  app.get("/api/playersForTeam/:id", getPlayersForTeam);

  app.post("/api/player", addPlayer);

  app.post("/api/addplayers", addPlayers);
};
