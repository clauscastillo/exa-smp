const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "client is required"],
      unique: true,
    },
    number: {
      type: Number,
      required: [true, "The number of player is required"],
    },
    teamId: {
      type: Number,
      required: [true, "id of team is required"],
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("players", PlayerSchema);

module.exports = Player;
