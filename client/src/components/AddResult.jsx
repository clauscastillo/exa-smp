import axios from "axios";
import React from "react";

const handleSubmit = async (e, teams, game) => {
  e.preventDefault();

  const local = teams.find((team) => team.teamId === game.local);
  const visitor = teams.find((team) => team.teamId === game.visitor);

  game.localGoals = Number(e.target[0].value);
  game.visitorGoals = Number(e.target[1].value);

  console.log(game);

  axios
    .put("http://localhost:8000/api/addresult", [local, visitor, game])
    .then((res) => console.log(res.data));
};

const AddResult = ({ game, teams }) => {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, teams, game);
      }}
    >
      <label>Goles Local</label>
      <input type="text" />
      <label>Goles Visitante</label>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddResult;
