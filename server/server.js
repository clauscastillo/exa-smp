const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const Player = require("./models/player.model");

// Iniciar server

app.listen(port, () => {
  console.log("Server run at port " + port);
});

// Configuracion para peticiones cruzadas y lectura de POST
const allowedOrigins = ["http://localhost:5173", "https://exasmp4.site"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuracion de mongoose

require("./config/mongoose.config");

// Rutas

const TeamsRoutes = require("./routes/teams.routes");
TeamsRoutes(app);

const PlayerRoutes = require("./routes/player.routes");
PlayerRoutes(app);

const GameRoutes = require("./routes/game.routes");
GameRoutes(app);

// const UserRoutes = require("./routes/user.routes");
// UserRoutes(app);

Player.deleteMany({ number: 30 }).then(console.log("eliminados"));
