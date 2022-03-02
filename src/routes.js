import React from "react";
import { Routes, Route } from "react-router-dom";

//Import My Routes
import Home from "./pages/HomePage";
import Seminovos from "./pages/Tora-seminovos";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="Tora-Seminovos" element={<Seminovos />}>
        Tora-Seminovos
      </Route>
    </Routes>
  );
}
