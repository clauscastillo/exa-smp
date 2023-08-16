import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Header from "./components/Header";
import Admin from "./views/Admin";
import Coming from "./components/Coming";

const playersM = [
  { name: "Juan José Balbuena", number: 1, teamId: 1 },
  { name: "Rodrigo Garcia ", number: 13, teamId: 1 },
];

const teamsM = [
  { name: "Man City", teamId: 1, players: [{}], partidos: [{}] },
  { name: "Juventus", teamId: 2, players: [{}], partidos: [{}] },
  { name: "Liverpool", teamId: 3, players: [{}], partidos: [{}] },
  { name: "Borussia", teamId: 4, players: [{}], partidos: [{}] },
  { name: "Peñarol", teamId: 5, players: [], partidos: [] },
  { name: "Independiente", teamId: 6, players: [{}], partidos: [{}] },
  { name: "Roma", teamId: 7, players: [{}], partidos: [{}] },
  { name: "Corintians", teamId: 8, players: [{}], partidos: [{}] },
  { name: "Atl. Nacional", teamId: 9, players: [{}], partidos: [{}] },
  { name: "Chelsea", teamId: 10, players: [{}], partidos: [{}] },
  { name: "Boca", teamId: 11, players: [{}], partidos: [{}] },
  { name: "River Plate", teamId: 12, players: [{}], partidos: [{}] },
  { name: "Atlanta", teamId: 13, players: [{}], partidos: [{}] },
];

const teamsF = [
  { name: "Man City", teamId: 14, players: [{}], partidos: [{}] },
  { name: "Borussia", teamId: 15, players: [{}], partidos: [{}] },
  { name: "Atl. Nacional", teamId: 16, players: [{}], partidos: [{}] },
  { name: "Independiente", teamId: 17, players: [{}], partidos: [{}] },
  { name: "Liverpool", teamId: 18, players: [{}], partidos: [{}] },
  { name: "Atlanta", teamId: 19, players: [{}], partidos: [{}] },
];

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/admin731649" element={<Admin />}></Route>
          <Route path="/equipos" element={<Coming />}></Route>
          <Route path="/clasificacion" element={<Coming />}></Route>
          <Route path="/ranking" element={<Coming />}></Route>
          <Route path="/comunidad" element={<Coming />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
