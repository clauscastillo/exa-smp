const {
  addGame,
  addGames,
  getGames,
  addResult,
} = require("../controllers/game.controller");

module.exports = (app) => {
  app.get("/api/games", getGames);
  app.post("/api/game", addGame);
  app.post("/api/games", addGames);
  app.put("/api/addresult", addResult);
};
