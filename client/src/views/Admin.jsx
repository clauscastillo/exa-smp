import React, { useState } from "react";

const groupA = [
  "Chelsea",
  "Atlético Nacional",
  "Manchester City",
  "Peñarol",
  "River Plate",
  "Roma",
  "Juventus",
];

const groupB = [
  "Boca",
  "Atlanta",
  "Corintians",
  "Borussia",
  "Independiente",
  "Liverpool",
];

const teamsM = [groupA, groupB];

const teamsF = [];

const Admin = () => {
  const [form, setForm] = useState({
    group: "groupA",
  });

  const handleForm = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      group: e.target.value,
    });
  };
  return (
    <div>
      <form action="">
        <h2>Agregar encuentro</h2>
        <select name="" id="" onChange={handleForm}>
          <option value="groupA">Grupo A</option>
          <option value="groupB">Grupo B</option>
        </select>
        <select name="" id="">
          {form.group === "groupA" &&
            teamsM[0].map((team) => {
              return (
                <option key={team} value={team}>
                  {team}
                </option>
              );
            })}
          {form.group === "groupB" &&
            teamsM[1].map((team) => {
              return (
                <option key={team} value={team}>
                  {team}
                </option>
              );
            })}
        </select>
      </form>
    </div>
  );
};

export default Admin;
