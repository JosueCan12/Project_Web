import React from "react";

function OptionCard({ info, showModal, showList }) {
  /* 
  Este codigo es ejemplo de lo que se donde se pondria la funcion que se ejecuta cuando le das click al boton "ver ...", solo remplazalo cuando lo necesites 
  */

  if (!showList) {
    showList = () => {
      alert(`Mostrando ${info.boton}`);
    };
  }

<<<<<<< HEAD
  return (
    <div className="grid gap-y-2 gap-x-1.5 grid-cols-1 sm:grid-cols-3 shadow-lg bg-blanco h-auto hover:scale-105 duration-500 py-5 px-4 rounded-xl place-items-center">
=======
function OptionCard({ info, showModal, showList }) {

  /* 
  Este codigo es ejemplo de lo que se donde se pondria la funcion que se ejecuta cuando le das click al boton "ver ...", solo remplazalo cuando lo necesites 
  */
  if (!showList) {
    showList = () => {
      alert(`Mostrando ${info.boton}`);
    }
  }

  return (
    <div className="grid gap-y-2 gap-x-1.5 grid-cols-1 sm:grid-cols-3 shadow-lg bg-blanco h-auto hover:scale-105 duration-500 py-5 px-4 rounded-xl place-items-center">

>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
      <div className="col-span-1 pl-2  max-w-[150px] ">
        <img
          src={`./src/assets/${info.src}.png`}
          className="shadow-xl rounded-full m-auto bg-cover"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-2 justify-around">
        <h2 className="text-center font-bold">{info.title}</h2>
        <div className="flex justify-center items-center">
          <div>
<<<<<<< HEAD
            <button
              className=" w-auto bg-blue-700 hover:bg-blue-500 hover:text-blue  text-blanco focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2"
              onClick={() => {
                showModal(true);
              }}
            >
=======
            <button className=" w-auto bg-blue-700 hover:bg-blue-500 hover:text-blue  text-blanco focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2" onClick={() => { showModal(true) }}>
>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
              {info.button}
            </button>
          </div>
          <div className="pl-4">
<<<<<<< HEAD
            <button
              className=" w-auto bg-green-700 text-blanco hover:bg-green-500 hover:text-blue focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2"
              onClick={() => {
                /* Aquí iria el codigo para mostrar las listas de ingredientes */
                  
                showList();
              }}
            >
=======
            <button className=" w-auto bg-green-700 text-blanco hover:bg-green-500 hover:text-blue focus:outline-none rounded-md font-medium text-sm px-2 shadow-2xl py-2" onClick={() => {
              /* Aquí iria el codigo para mostrar las listas de ingredientes */
              showList()
            }}>
>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
              {info.boton}
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
    </div>
  );
}

export default OptionCard;
