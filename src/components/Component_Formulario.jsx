import React from "react";
import { useState, useEffect } from "react";

const initailForm = {
  tamaño: "",
  sabor: "",
  precio: "",
  id: null,
};

const Component_Formulario = ({
  createData,
  UpdateData,
  dataToEdit,
  setdataToEdit,
}) => {
  const [form, setForm] = useState(initailForm);

  useEffect(()=> {
    if(dataToEdit){
      setForm(dataToEdit)
    }else{
      setForm(initailForm);
    }
  },[dataToEdit]);

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

    if (!form.precio <= 0 )
    {
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
    <div className="container px-5 py-1">
      <form className=" shadow-xl" onSubmit={handleSubmit}>
        <h1 className="text-center py-1 pb-5 text-2xl font-bold text-botones">
          {dataToEdit ? "Editar Producto": "Agregar Producto"}
        </h1>
        <div className="flex mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
              Tamaño
            </label>
            <input
              className="appearance-none block w-full  bg-gray text-black border border-blue  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray"
              type="text"
              name="tamaño"
              onChange={handleChange}
              placeholder="Tamaño"
              value={form.tamaño}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Sabor
            </label>
            <input
              className="appearance-none block w-full bg-gray text-black border border-blue  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
              type="text"
              name="sabor"
              onChange={handleChange}
              placeholder="Sabor"
              value={form.sabor}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Precio
            </label>
            <input
              className="appearance-none block w-full bg-gray text-black border border-blue rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
              type="number"
              name="precio"
              onChange={handleChange}
              placeholder="Precio"
              value={form.precio}
            />
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <div className="pl-4">
            <input
              type="submit"
              value="Guardar"
              className="bg-white hover:bg-gray text-blue font-semibold py-2 px-4 border border-gray rounded shadow"
            />
          </div>

          <div className="px-4">
            <input
              type="reset"
              value="Limpiar"
              onClick={handleReset}
              className="bg-white hover:bg-gray text-red font-semibold py-2 px-4 border border-gray rounded shadow"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Component_Formulario;
