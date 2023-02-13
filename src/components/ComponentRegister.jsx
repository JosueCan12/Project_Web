import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function ComponentRegister() {
  const [form, setForm] = useState({});
  const { registerAccount } = useAuth();

  // useEffect(() => {
  //   (() => {
  //     console.log(form);
  //   })();
  // }, [form]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    [...event.target].forEach((element) => {
      if (
        element.attributes.type &&
        element.attributes.type.nodeValue === "submit"
      ) {
        return;
      }
      setForm({
        ...form,
        [element.name]: element.value,
      });
    });

    console.log(form);
    registerAccount(form);
  };

  return (
    <div className="flex justify-center px-6 my-6 ">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg rounded-l-lg ">
        <div className="w-full h-auto bg-gray-40 flex py-24 lg:block lg:w-5/12 bg-cover rounded-l-lg bg-blanco md:hidden">
          <img src="./src/assets/Logo.png" />
        </div>

        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center font-bold text-blue-700">
            Crea una cuenta
          </h3>
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Nombre(s)
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Nombre(s)"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Apellidos
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Apellidos"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Correo
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="Correo"
                type="text"
                placeholder="Correo"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Contraseña
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Rol
              </label>
              <select
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="roles"
                onChange={handleChange}
              >
                <option value="">Seleccione un campo</option>
                <option value="admin">Administrador</option>
                <option value="seller">Vendedor</option>
              </select>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrar cuenta
              </button>
            </div>
            <hr className="mb-6 border-t" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComponentRegister;
