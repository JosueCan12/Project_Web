import React from "react";
import TitlePage from "../components/TitlePage";
import { Outlet } from "react-router-dom";

function PagesIngredientes() {

  return (
    <div className="container">
    {/*   <TitlePage label="Ingredientes" /> */}
      <Outlet />
    </div>
  );
}

export default PagesIngredientes;
