import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pages_pedido from "../pages/Pages_pedido";
import Pages_usuarios from "../pages/Pages_usuarios";
import Pages_Agregar_Ingredientes from "../pages/Pages_Agregar_Ingredientes";

function Func_Navbar() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/pedido" element={<Pages_pedido />} />
        <Route path="/usuario" element={<Pages_usuarios />} />
        <Route path="/ingredientes" element={<Pages_Agregar_Ingredientes />} />
      </Routes>
    </div>
  );
}

export default Func_Navbar;
