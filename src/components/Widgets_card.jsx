import React from "react";

const Widgets_Card = () => {
  const Card = [
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
    <div className="justify-center py-10">
      <div className="grid grid-cols-3 grap-3">
        {Card.map((Cards, index) => (
          <div key={index}>
            <div className="flex justify-center px-3 ">
              <div className="grid grid-cols-3 shadow-lg bg-blanco h-auto items-center">
                <div className="col-span-1 pl-2 ">
                  <img
                    src={`./src/assets/${Cards.src}.png`}
                    className=" shadow-xl rounded-full m-auto bg-cover" 
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                  <h2 className="text-center font-bold">{Cards.title}</h2>
                  <div className="flex justify-center pt-3 pb-4">
                    <div>
                      <button className=" w-15 bg-blue hover:bg-blanco hover:text-blue  text-blanco focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2 ">
                        {Cards.button}
                      </button>
                    </div>
                    <div className="pl-4">
                      <button className=" w-15 bg-green text-blanco hover:bg-blanco hover:text-blue focus:outline-none rounded-md font-medium text-sm px-3 shadow-2xl py-2">
                        {Cards.boton}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets_Card;
