import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import PagesIngredientes from './pages/PageIngredientes';
import PageUsuarios from './pages/PageUsuarios';
import PagePedidos from './pages/PagePedidos';

function App() {
  return (  
  
    <div className="flex">
      <Navbar />
      <Routes>  
        <Route path="/" element={<PagePedidos />} />
        <Route path="/usuario" element={<PageUsuarios />} />
        <Route path="/ingredientes" element={<PagesIngredientes />} />
      </Routes>
    </div>
 
  );
}

export default App;
