import React from "react";
import { Routes, Route } from "react-router-dom";

//Import My Routes
import Home from "./pages/HomePage";
import Seminovos from "./pages/Tora-seminovos";
import Estoque from "./pages/Estoque";
import Contato from "./pages/Contatos";
import AdminPainel from "./pages/AdminPainel"
import RegistrarVeiculos from "./pages/AdminPainel/registrarVeiculos/index.";
import VisualizarVeiculos from "./pages/AdminPainel/visualizarVeiculos";
import MensagensAnuncios from "./pages/AdminPainel/mensagensAnuncios/index"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="Tora-Seminovos" element={<Seminovos />}>
        Tora-Seminovos
      </Route>
      <Route path="Estoque" element={<Estoque/>}>
        Estoque
      </Route>
      <Route path="Contatos" element={<Contato/>}>
        Contato
      </Route>
      <Route path="AdminPainel" element={<AdminPainel/>}>
        AdminPainel
      </Route>
      <Route path="/RegistrarVeiculos" element={<RegistrarVeiculos/>}>
       registrar
      </Route>
      <Route path="/VisualizarVeiculos" element={<VisualizarVeiculos/>}>
        Visualizar
      </Route>
      <Route path="/MensagensAnuncios" element={<MensagensAnuncios/>}>
        Mensagens
      </Route>
    

    </Routes>
  );
}
