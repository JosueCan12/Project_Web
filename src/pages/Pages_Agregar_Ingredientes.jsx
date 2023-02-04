import React from "react";
import { Link } from "react-router-dom";
import Widgets_Card from "../components/Widgets_card";
import Agregar_ingredientes from "./Agregar_ingredientes";


const Pages_Agregar_Ingredientes = () => {
  return (
    <div className="container ">
      <div className="mx-auto bg-blanco h-14 shadow-lg">
        <ul className="list-none py-3 text-botones font-bold flex justify-center ">
          <Link to="/ingredientes">
            <li className="text-2xl ">Ingredientes</li>
          </Link>
          {/* <Link to="/usuario"><img src="./src/assets/mas.png" className="w-7" /></Link> */}
        </ul>
      </div>
      <Widgets_Card></Widgets_Card>

      <Agregar_ingredientes></Agregar_ingredientes>
    {/*  <Example></Example> */}
    
    </div>
  );
};

export default Pages_Agregar_Ingredientes;
