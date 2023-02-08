import React from "react";

import TitlePage from "../components/TitlePage";
import OptionAddUsers from "../components/OptionAddUsers";
import ComponentPedidos from './../components/ComponentPedidos';

function PagePedidos() {
  return (
    <div className="container">
      <TitlePage label="Pedidos"/>
  
      <OptionAddUsers/>
      
      <ComponentPedidos/>
      
    </div>
  );
}
export default PagePedidos;