import React from "react";

import TitlePage from "../components/TitlePage";
import OptionAddUsers from "../components/OptionAddUsers";
import ComponentPedidos from "./../components/ComponentPedidos";
import { useAuth } from "../hooks/useAuth";

function PagePedidos() {
  const { rol } = useAuth();

  return (
    <div className="container py-4">
     {/*  <TitlePage label="Pedidos" /> */}

     {/*  {rol === "admin" ? <OptionAddUsers /> : null} */}

      <ComponentPedidos />
    </div>
  );
}
export default PagePedidos;
