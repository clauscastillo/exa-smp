const {
  addTeam,
  getTeams,
  addPlayer,
  editService,
  deleteService,
  getAllServices,
} = require("../controllers/team.controller");

module.exports = (app) => {
  app.get("/api/teams", getTeams);

  app.post("/api/team", addTeam);

  app.put("/api/addplayer/:id", addPlayer);

  app.put("/api/editservice/:id", editService);

  app.delete("/api/service/:id", deleteService);

  app.get("/api/internal/services", getAllServices);
};
