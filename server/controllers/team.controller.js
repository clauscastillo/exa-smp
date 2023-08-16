const Team = require("../models/team.model");
const User = require("../models/users.model");
const SECRET = process.env.KEYJWT;

const getTeams = async (req, res) => {
  Team.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const addPlayer = (req, res) => {
  Team.findOne({ teamId: req.body.teamId })
    .then((response) => {
      const players = response.players;
      console.log(players);
      Team.findOneAndUpdate(
        { teamId: req.body.teamId },
        {
          players: [...players, req.body],
        }
      )
        .then((respon) => res.json(respon))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};

const addTeam = (req, res) => {
  Team.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const editService = (req, res) => {
  console.log(req.params.id);
  if (req.body.key == "description") {
    Service.findByIdAndUpdate(req.params.id, {
      $set: { description: req.body.description },
    }).then((response) => res.json(response));
  } else {
    Service.findByIdAndUpdate(req.params.id, {
      $set: { status: req.body.status },
    }).then((response) => res.json(response));
  }
};

const deleteService = (req, res) => {
  Service.findByIdAndDelete(req.params.id)
    .then(res.json("Deleted Correctly"))
    .catch((err) => res.json("No Deleted" + err));
};

const getAllServices = (req, res) => {
  const token = req.headers.user;
  const user = jwt.verify(token, SECRET);
  User.findById(user._id).then((response) => {
    if (response.admin == true) {
      Service.find().then((respon) => res.json(respon));
    } else {
      res.status(401).json({ error: "No estas autorizado" });
    }
  });
};

module.exports = {
  getTeams,
  addTeam,
  addPlayer,
  editService,
  deleteService,
  getAllServices,
};
