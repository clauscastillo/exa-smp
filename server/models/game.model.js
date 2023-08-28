const mongoose = require("mongoose");

const GameSchema = mongoose.Schema(
  {
    gameId: {
      type: String,
      unique: [true, "The gameId is unique"],
      required: true,
    },
    local: {
      type: Number,
      required: true,
    },
    visitor: {
      type: Number,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    played: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Games = mongoose.model("games", GameSchema);

module.exports = Games;
