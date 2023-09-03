const Player = require("../models/player.model");
const Teams = require("../models/team.model");

const getPlayers = (req, res) => {
  Player.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const getPlayer = (req, res) => {
  Player.findById()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const getPlayersForTeam = (req, res) => {
  Player.find({ teamId: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

const addPlayer = (req, res) => {
  Player.create(req.body)
    .then((response) => {
      Teams.findOne({ teamId: response.teamId })
        .then((respon) => {
          Teams.findByIdAndUpdate(respon._id, {
            players: [...respon.players, response._id],
          }).then(res.json("Agregado con exito papichurro"));
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

const addPlayers = async (req, res) => {
  try {
    for (const playerdata of req.body) {
      if (playerdata.pic === true) {
        const player = new Player({
          ...playerdata,
          pic:
            "/players/" + playerdata.teamId + "/" + playerdata.number + ".webp",
        });
        await player.save();
        console.log(`Jugador "${player.name}" agregado a MongoDB.`);
      } else {
        const player = new Player({
          ...playerdata,
          pic: "",
        });
        await player.save();
        console.log(`Jugador "${player.name}" agregado a MongoDB.`);
      }
    }
  } catch (error) {
    console.error("Error al agregar jugadores:", error);
  }
};

const deletePlayers = (req, res) => {
  Player.deleteMany({ teamId: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

module.exports = {
  getPlayers,
  getPlayer,
  addPlayer,
  getPlayersForTeam,
  addPlayers,
  deletePlayers,
};
