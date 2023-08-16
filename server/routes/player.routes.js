const {
  getPlayers,
  getPlayer,
  addPlayer,
} = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", getPlayers);

  app.get("/api/player/:id", getPlayer);

  app.post("/api/player", addPlayer);
};
