import React from "react";
import { Routes, Route } from "react-router-dom";

//Import My Routes
import Home from "./pages/HomePage";
import Seminovos from "./pages/Tora-seminovos";
import Estoque from "./pages/Estoque";
import Contato from "./pages/Contatos";
<<<<<<< HEAD
import AdminPainel from "./pages/AdminPainel";
import LoginAdm from "./pages/Login" 
=======
>>>>>>> 00fd495c50b558960ce6f5ba3fa76711c02d0c87

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
        Estoque
      </Route>
<<<<<<< HEAD
      <Route path="AdminPainel" element={<AdminPainel/>}>
        Estoque
      </Route>
      <Route path="Login" element={<LoginAdm/>}>
        Estoque
      </Route>
=======
>>>>>>> 00fd495c50b558960ce6f5ba3fa76711c02d0c87
    </Routes>
  );
}
