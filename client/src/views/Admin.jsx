import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    teamId: 1,
    number: 1,
  });

  const handleForm = (e) => {
    console.log(e.target.value);

    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formToSend = {
      name: form.name,
      teamId: Number(form.teamId),
      number: Number(form.number),
    };

    console.log(formToSend);
    axios
      .post("http://127.1.1.0:8000/api/player/", formToSend)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {/* <form action="">
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
      </form> */}
      <div>
        <p>{form.name}</p>
        <p>{form.teamId}</p>
        <p>{form.number}</p>
      </div>
      <form className="add-player" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleForm}
        />
        <label htmlFor="teamId">Equipo:</label>
        <select id="teamId" name="teamId" required onChange={handleForm}>
          <option value="" disabled selected>
            Seleccione un equipo
          </option>
          <option value={1}>Man City</option>
          <option value={2}>Juventus</option>
          <option value={3}>Liverpool</option>
          <option value={4}>Borussia</option>
          <option value={5}>Peñarol</option>
          <option value={6}>Independiente</option>
          <option value={7}>Roma</option>
          <option value={8}>Corintians</option>
          <option value={9}>Atl. Nacional</option>
          <option value={10}>Chelsea</option>
          <option value={11}>Boca</option>
          <option value={12}>River Plate</option>
          <option value={13}>Atlanta</option>
          <option value={14}>Man City</option>
          <option value={15}>Borussia</option>
          <option value={16}>Atl. Nacional</option>
          <option value={17}>Independiente</option>
          <option value={18}>Liverpool</option>
          <option value={19}>Atlanta</option>
        </select>

        <label htmlFor="number">Número:</label>
        <input
          type="number"
          id="number"
          name="number"
          required
          value={form.number}
          onChange={handleForm}
        />

        <button type="submit">Agregar Jugador</button>
      </form>
    </div>
  );
};

export default Admin;
