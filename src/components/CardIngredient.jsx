import React from "react";

const CardIngredient = ({ element, setdataToEdit, deleteData, setShowModal }) => {
  let { tamaño, sabor, precio, id } = element;

  return (
    <div className="col-span-1 py-3 px-3">
      <div className="max-w-sm mx-auto shadow-xl bg-white border border-gray rounded-lg dark:border-gray">
        <div className="w-full">
          <img
            className="rounded-t-lg w-full"
            src="https://imgs.search.brave.com/YzOoqUcP4JmQloLOlyQYU5Su1BGiZ3_kWUis3jvp2t8/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Rk1LMF9nekgzRXhV/d3d0VTVfWnNRSGFF/NiZwaWQ9QXBp"
          />
        </div>
        <div className="p-1 ">
          <div className="flex justify-center">
            <h5 className="mb-2 font-bold tracking-tight  ">
              Tamaño: <span className="font-normal"> {tamaño}</span>
            </h5>
          </div>
          <div>
            <h3 className="mb-2 font-bold tracking-tight ">
              Precio: ${precio}
            </h3>
          </div>
          <div>
            <h2 className="mb-2 font-bold tracking-tight text-gray-900">
              Sabor: {sabor}
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-2 pb-2">
            <button
              onClick={() => {
                setShowModal(true);
                setdataToEdit(element);
                console.log("hola");
              }}
              className="bg-green-900 rounded-lg px-3 py-1 text-blanco"
            >
              Edit
            </button>
          </div>
          <div className="px-2 pb-2">
            <button
              onClick={() => deleteData(id)}
              className="bg-red-700 rounded-lg px-3 py-1 text-blanco"
            >
              Delet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIngredient;