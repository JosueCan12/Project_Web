import React from "react";

const CardIngredient = ({
  element,
  setdataToEdit,
  deleteData,
  setShowModal,
}) => {
  let { tamaño, sabor, precio, id } = element;

  return (
    <div className="col-span-1 py-3 px-3">
      <div className="max-w-sm mx-auto shadow-xl bg-white border border-gray rounded-lg dark:border-gray">
        <div className="">
          <img
            className="rounded-t-lg "
            src="https://imgs.search.brave.com/TO4Crrdwnppz_1Q4xGrzVtJ5wm8cwHZiRCzJ4Uw4nIo/rs:fit:1200:853:1/g:ce/aHR0cDovL3d3dy50/YXJqZXRhc2RlY3Vt/cGxlYW5vcy5pbmZv/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzEwL0ltJUMzJUEx/Z2VuZXMtZGUtcGFz/dGVsZXMtZGUtY3Vt/cGxlYSVDMyVCMW9z/MS5qcGc"
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
