import React from "react";
import OptionCard from "./OptionCard";

const OptionsContainer = ({showModal}) => {
  const Cards = [
    {
      title: "Añadir tamaño del pan",
      src: "logopan",
      button: "Agregar",
      boton: "Ver panes",
    },
    {
      title: "Añadir sabor",
      src: "logorelleno",
      button: "Agregar",
      boton: "Ver sabores",
    },
    {
      title: "Añadir relleno",
      src: "logosabor",
      button: "Agregar",
      boton: "Ver relleno",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-6 py-5">
      {Cards.map((Card, index) => (
<<<<<<< HEAD
        <OptionCard info={Card} key={index}showModal={showModal}/>
=======
        <OptionCard info={Card} key={index} showModal={showModal}/>
>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
      ))}
    </div>
  );
};

export default OptionsContainer;