const {
  addGame,
  getGames,
  addResult,
} = require("../controllers/game.controller");

module.exports = (app) => {
  app.get("/api/games", getGames);
  app.post("/api/game", addGame);
  app.put("/api/addresult", addResult);
};
