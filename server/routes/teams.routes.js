const {
  addTeam,
  getTeams,
  addPlayer,
  addTeams,
  editStats,
} = require("../controllers/team.controller");

module.exports = (app) => {
  app.get("/api/teams", getTeams);

  app.post("/api/team", addTeam);

  app.post("/api/teams", addTeams);

  app.put("/api/addplayer/:id", addPlayer);

  app.put("/api/editteam", editStats);
};
