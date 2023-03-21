import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function ComponentRegister({ closeModal }) {
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
    <div>
      <h1 className="text-center font-bold pb-5 text-blue-600 text text-2xl">
        Agregar Usuario
      </h1>
      <form className="px-8 bg-white rounded" onSubmit={handleSubmit}>
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
            className="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrar cuenta
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComponentRegister;
