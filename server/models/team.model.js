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
      unique: true,
    },
    shieldUrl: {
      type: String,
    },
    points: {
      type: Number,
    },
    played: {
      type: Number,
    },
    diff: {
      type: Number,
    },
    group: {
      type: String,
    },
  },
  { timestamps: true }
);

const Teams = mongoose.model("teams", TeamSchema);

module.exports = Teams;
