import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PagesIngredientes from "./pages/PageIngredientes";
import PageUsuarios from "./pages/PageUsuarios";
import PagePedidos from "./pages/PagePedidos";
import Login from "./pages/PagesLogin";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
