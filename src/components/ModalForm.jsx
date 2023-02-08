import React from 'react';
import { useState, useEffect } from "react";

const initailForm = {
  tamaño: "",
  sabor: "",
  precio: "",
  id: null,
};

function ModalForm({
  setShowModal,
  createData,
  UpdateData,
  dataToEdit,
  setdataToEdit,
}) {

  const [form, setForm] = useState(initailForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.tamaño || !form.sabor) {
      alert("Datos incompletos");
      return;
    }

    if (form.precio <= 0) {
      alert("Escribe un precio valido");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      UpdateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initailForm);
    setdataToEdit(null);
  };

  return (
    <>
      {/* MODAL */}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          
          {/* MODAL CONTAINER */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

            {/* MODAL HEADER */}
            <div className="flex t items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">

              {/* MODAL TITLE */}
              <h1 className=" py-1 pl- text-2xl font-bold text-blue-600 ">
                {dataToEdit ? "Editar" : "Agregar "}
              </h1>

              {/* CLOSE BUTTON MODAL */}
              <button
                className="bg-transparent border-0 text-black transition-all duration-150 ease-linear  px-4 pt-1 pb-3  text-xl font-bold"
                onClick={() => {
                  setShowModal(false)
                  setdataToEdit(null)
                }}
              >
                &times;
              </button>

            </div>
            
            {/* MODAL FORM CONTAINER */}
            <div className="relative p-6 flex-auto">
              
              {/* MODAL FORM */}
              <form
                className="  "
                onSubmit={handleSubmit}
              >

                {/* INPUTS CONTAINER */}
                <div className="flex mb-6">

                  {/* INPUT ARCHIVO */}
                  <div className="w-full md:w-1/1 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>

                  {/* INPUT TAMAÑO */}
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Tamaño
                    </label>
                    <input
                      className="appearance-none block w-full  bg-write text-gray-900 border border-gray  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                      type="text"
                      name="tamaño"
                      onChange={handleChange}
                      placeholder="Tamaño"
                      value={form.tamaño}
                    />
                  </div>

                  {/* INPUT SABOR */}
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Sabor
                    </label>
                    <input
                      className="appearance-none block w-full bg-write text-black border border-gray rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                      type="text"
                      name="sabor"
                      onChange={handleChange}
                      placeholder="Sabor"
                      value={form.sabor}
                    />
                  </div>

                  {/* INPUT PRECIO */}
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Precio
                    </label>
                    <input
                      className="appearance-none block w-full bg-write text-black border border-gray rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                      type="number"
                      name="precio"
                      onChange={handleChange}
                      placeholder="Precio"
                      value={form.precio}
                    />
                  </div>
                </div>

                {/* BUTTONS CONTAINER */}
                <div className="flex justify-center pb-5">
                  
                  {/* SUBMIT BUTTON */}
                  <div className="pl-4">
                    <input
                      type="submit"
                      value="Guardar"
                      className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-2 px-4 border border-gray rounded shadow"
                    />
                  </div>

                  {/* RESET BUTTON */}
                  <div className="px-4">
                    <input
                      type="reset"
                      value="Limpiar"
                      onClick={handleReset}
                      className="bg-white hover:bg-gray-200 text-red-600 font-semibold py-2 px-4 border border-gray rounded shadow"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ModalForm;