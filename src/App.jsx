import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PagesIngredientes from "./pages/PageIngredientes";
import PageUsuarios from "./pages/PageUsuarios";
import PagePedidos from "./pages/PagePedidos";
import Login from "./pages/PagesLogin";

function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <div className="">
      {isLoggedIn ? (
        <div className="flex">
          <Navbar />
          <Routes>
            <Route path="/pedido" element={<PagePedidos />} />
            <Route path="/usuario" element={<PageUsuarios />} />
            <Route path="/ingredientes" element={<PagesIngredientes />} />
          </Routes>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<Login setIsLoggedin={setIsLoggedin} />} />
=======
  return (  
  
    <div className="flex">
      <Navbar />
      <Routes>  
        <Route path="/" element={<PagePedidos />} />
        <Route path="/usuario" element={<PageUsuarios />} />
        <Route path="/ingredientes" element={<PagesIngredientes />} />
>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
      </Routes>
    </div>
  );
}

export default App;
