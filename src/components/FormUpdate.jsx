import { useState } from "react";

function FormUpdate({ title, handleShowModal, showModal, submitEvent }) {

  return (
    <div className="bg-white max-w-[500px] m-auto mt-5 w-full rounded-md border border-gray-200 max-h-full shadow-2xl py-2 px-3">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          className="text-gray-300 hover:text-black transition-all duration-75 text-lg"
          // onClick={() => {
          //   handleShowModal(false);
          // }}
        >
          &times;
        </button>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 " />

      <form className="flex flex-col rounded-md mt-4">
        {/* ... */}
        <div className="flex flex-col">
          <label
            htmlFor="size"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Tamaño:
          </label>
          <input
            type="text"
            id="size"
            name="size"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>

        {/* .... */}
        <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Precio
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>
        {/* ... */}
        <div className="flex flex-col">
          <label
            htmlFor="imagen"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Imagen
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>
        <input
          className="block bg-blue-200 py-2 px-3 rounded-md hover:bg-blue-600 hover:text-gray-100 "
          type="submit"
          name="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}

export default FormUpdate;
