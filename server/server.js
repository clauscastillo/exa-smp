const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

// Iniciar server

app.listen(port, () => {
  console.log("Server run at port " + port);
});

// Configuracion para peticiones cruzadas y lectura de POST
app.use(
  cors({
    origin: "http://localhost:5173",
    origin: "https://exasmp.site",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuracion de mongoose

require("./config/mongoose.config");

// Rutas

const TeamsRoutes = require("./routes/teams.routes");
TeamsRoutes(app);

const PlayerRoutes = require("./routes/player.routes");
PlayerRoutes(app);

// const UserRoutes = require("./routes/user.routes");
// UserRoutes(app);
