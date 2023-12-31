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
import Test from "./views/Test";
import Loading from "./views/Loading";
function App() {
  const [toggle, setToggle] = useState(false);
  const [teams, setTeams] = useState(false);
  const [games, setGames] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/games")
      .then((res) => {
        setGames(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => {
        setTimeout(() => {
          setTeams(res.data);
          console.log(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header toggle={toggle} setToggle={setToggle} />
          <Routes>
            <Route
              path="/"
              element={<Index teams={teams} games={games} />}
            ></Route>
            <Route
              path="/admin731649"
              element={<Admin teams={teams} games={games} />}
            ></Route>
            <Route path="/equipos" element={<Teams teams={teams} />}></Route>
            <Route path="/equipos/:id" element={<Team teams={teams} />}></Route>
            <Route
              path="/clasificacion"
              element={<Ranking teams={teams} />}
            ></Route>
            <Route path="/comunidad" element={<Coming />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
