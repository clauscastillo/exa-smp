import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Header from "./components/Header";
import Admin from "./views/Admin";
import Coming from "./components/Coming";
import Teams from "./views/Teams";
import Ranking from "./views/Ranking";
import Team from "./views/Team";
function App() {
  const [toggle, setToggle] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.1.1.0:8000/api/teams")
      .then((res) => setTeams(res.data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/admin731649" element={<Admin />}></Route>
          <Route path="/equipos" element={<Teams teams={teams} />}></Route>
          <Route path="/equipos/:id" element={<Team teams={teams} />}></Route>
          <Route
            path="/clasificacion"
            element={<Ranking teams={teams} />}
          ></Route>
          <Route path="/comunidad" element={<Coming />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
