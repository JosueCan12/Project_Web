import React from "react";
import TitlePage from "../components/TitlePage";
import ComponentRegister from "../components/ComponentRegister";

function PageUsuarios() {
  return (
    <div className="container bg-gray-100 ">
    <TitlePage label="Pedidos"/>

     <ComponentRegister/>

    </div>
  );
}

export default PageUsuarios;
