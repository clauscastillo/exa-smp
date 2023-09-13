import { useState } from "react";
import axios from "axios";
import AddResult from "../components/AddResult";
import GamesAdmin from "../components/GamesAdmin";

const Admin = ({ teams, games }) => {
  const [cat, setCat] = useState(true);
  const [form, setForm] = useState({
    gameId: 0,
    local: "",
    visitor: "",
    hour: "18:00",
    played: false,
    date: 0,
    categorie: "masculino",
    localGoals: 0,
    visitorGoals: 0,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    name === "categorie" && setCat(!cat);
    if (name === "local" || name === "visitor" || name === "date") {
      setForm({
        ...form,
        [name]: Number(value),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/game", {
        ...form,
        gameId:
          form.local.toString() +
          form.visitor.toString() +
          form.date.toString(),
        played: false,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <GamesAdmin teams={teams} />
      <form className="add-player" action="" onSubmit={handleSubmit}>
        <label htmlFor="categorie">Categoría</label>
        <select name="categorie" id="categorie" onChange={handleForm}>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <label htmlFor="local">Local</label>
        <select id="local" name="local" required onChange={handleForm}>
          <option value="" disabled selected>
            Seleccione un equipo
          </option>{" "}
          {cat && (
            <>
              s<option value={1}>Man City</option>
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
            </>
          )}
          {!cat && (
            <>
              <option value={14}>Man City</option>
              <option value={15}>Borussia</option>
              <option value={16}>Atl. Nacional</option>
              <option value={17}>Independiente</option>
              <option value={18}>Liverpool</option>
              <option value={19}>Atlanta</option>
            </>
          )}
        </select>

        <label htmlFor="visitor">Visitante</label>
        <select id="visitor" name="visitor" required onChange={handleForm}>
          <option value="" disabled selected>
            Seleccione un equipo
          </option>{" "}
          {cat && (
            <>
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
            </>
          )}
          {!cat && (
            <>
              <option value={14}>Man City</option>
              <option value={15}>Borussia</option>
              <option value={16}>Atl. Nacional</option>
              <option value={17}>Independiente</option>
              <option value={18}>Liverpool</option>
              <option value={19}>Atlanta</option>
            </>
          )}
        </select>

        <label htmlFor="">Fecha</label>
        <input name="date" type="number" onChange={handleForm} />

        <label htmlFor="">Hora</label>
        <select name="hour" id="" onChange={handleForm}>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
          <option value="21:00">21:00</option>
          <option value="21:30">21:30</option>
          <option value="22:00">22:00</option>
        </select>

        <button type="submit">Agregar encuentro</button>
      </form>
      <form
        className="delete-players"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .delete(
              "http://localhost:8000/api/deleteplayers/" + e.target[0].value
            )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        <input type="number" min={1} max={19} />
        <button type="submit">Eliminar jugadores del equipo</button>
      </form>
    </div>
  );
};

export default Admin;
