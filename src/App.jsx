import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bicons from "./pages/Bicons";
import Art from "./pages/Art";
import Elementos from "./pages/Elementos";
import Formularios from "./pages/Formularios";
import Validacoes from "./pages/Validacoes";
import Login from "./pages/Login";
import PageTitle from "./components/PageTitle";
import Cadastro from "./pages/Cadastro";
import Accordion from "./pages/Accordion";

const App = () => {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bicons" element={<Bicons />} />
        <Route path="/art" element={<Art />} />
        <Route path="/elementos" element={<Elementos />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/validacoes" element={<Validacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
