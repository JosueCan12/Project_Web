import React from "react";

export const Table = ({ el, setdataToEdit, deleteData }) => {
  let { tamaño, sabor, precio, id } = el;

  return (
    <div className="col-span-1 py-3 px-3">
      <div className="max-w-sm shadow-xl bg-white border border-gray rounded-lg   dark:border-gray">
        <div>
          <img
            className="rounded-t-lg"
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
            {" "}
            <h3 className="mb-2 font-bold tracking-tight ">
              Precio: ${precio}
            </h3>
          </div>
          <div>
            {" "}
            <h2 className="mb-2 font-bold tracking-tight text-gray-900">
              Sabor: {sabor}
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-3">
            <button
              onClick={() => setdataToEdit(el)}
              className="bg-green rounded-md"
            >
             edit
            </button>
          </div>
          <div className="px-3">
            {" "}
            <button
              onClick={() => deleteData(id)}
              className="bg-red rounded-sm " 
            >
              delet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
