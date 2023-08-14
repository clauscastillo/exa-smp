import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import Header from "./components/Header";
import Admin from "./views/Admin";
import Coming from "./components/Coming";

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
