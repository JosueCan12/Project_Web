import React from 'react'


const CardsRellenos = ({ element, setdataToEdit, deleteData, setShowModal })=>{
  let { tamaño, sabor, precio, id } = element;
  return(
    <div className="col-span-1 py-3 px-3">
      <div className="max-w-sm mx-auto shadow-xl bg-white border border-gray rounded-lg dark:border-gray">
        <div className="">
          <img
            className="rounded-t-lg "
            src="https://imgs.search.brave.com/ptN9NKkhoUwi8cacCO6pqVXBvweaepIXstvCoIgKZc8/rs:fit:1200:1060:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tUlVTUGRQX2dV/RHMvVjBKMExvb2Ro/WEkvQUFBQUFBQUZv/RGMvRVh6RzJ0amo4/UlVUdXctUEFESjBx/SmlKZE5vZzZ3SUh3/Q0xjQi9zMTYwMC90/YXJ0YTI4LnBuZw"
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
  )
}

export default CardsRellenos