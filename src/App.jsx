import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bicons from "./pages/Bicons";
import Art from "./pages/Art";
import Elementos from "./pages/Elementos";
import Formularios from "./pages/Formularios";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bicons" element={<Bicons />} />
        <Route path="/art" element={<Art />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/formularios" element={<Formularios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
