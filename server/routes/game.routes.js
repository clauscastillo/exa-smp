const { addGame, getGames } = require("../controllers/game.controller");

module.exports = (app) => {
  app.get("/api/games", getGames);
  app.post("/api/game", addGame);
};
