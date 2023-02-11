import React from "react";
import OptionCard from "./OptionCard";

const OptionsContainer = ({ showModal, handlePost, handleField }) => {
  const Cards = [
    {
      title: "Añadir tamaño del pan",
      src: "logopan",
      button: "Agregar",
      boton: "Ver panes",
      urlPost: "/breadsize",
      nameField: "size"
    },
    {
      title: "Añadir sabor",
      src: "logorelleno",
      button: "Agregar",
      boton: "Ver sabores",
      urlPost: "/breadFlavor",
      nameField: "flavor"
    },
    {
      title: "Añadir relleno",
      src: "logosabor",
      button: "Agregar",
      boton: "Ver relleno",
      urlPost: "/stuffing",
      nameField: "stuffing"
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-6 py-5">
      {Cards.map((Card, index) => (
        <OptionCard
          info={Card}
          key={index}
          showModal={showModal}
          handlePost={handlePost}
          handleField={handleField}
        />
      ))}
    </div>
  );
};

export default OptionsContainer;
