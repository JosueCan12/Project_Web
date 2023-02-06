import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Pages_Agregar_Ingredientes from './pages/Pages_Agregar_Ingredientes';
import Pages_usuarios from './pages/Pages_usuarios';
import Pages_pedido from './pages/Pages_pedido';

function App() {
  return (  
  
    <div className="flex ">
      <Navbar />
      <Routes>  
        <Route path="/" element={<Pages_pedido />} />
        <Route path="/usuario" element={<Pages_usuarios />} />
        <Route path="/ingredientes" element={<Pages_Agregar_Ingredientes />} />
      </Routes>
    </div>
 
  );
}

export default App;
