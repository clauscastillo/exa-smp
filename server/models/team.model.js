const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "client is required"],
    },
    teamId: {
      type: Number,
      required: [true, "id of team is required"],
    },
    games: {
      type: Array,
      default: [],
    },
    players: {
      type: Array,
      default: [],
    },
    shieldUrl: {
      type: String,
    },
    games: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Teams = mongoose.model("teams", TeamSchema);

module.exports = Teams;
