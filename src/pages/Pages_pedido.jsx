import React from "react";
import { Link } from "react-router-dom";

function Pages_pedido() {
  return (
    <div className="container">
      <div className=" bg-blanco h-14 shadow-lg ">
        <ul className=" list-none py-3 text-botones font-bold flex justify-center ">
          <Link to="/">
            <li className=" text-2xl">Pedidos</li>
          </Link>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-2 py-5 px-14 ">
        <button
          type="button"
          className="bg-blue shadow-md hover: font-bold rounded w-48 text-blanco h-9"
        >
          {/* <Link to="/usuario">Agregar Usuario</Link> */}
          Agregar usuarios
        </button>
      </div>
      <div className="container w-11/12 shadow-2xl">
        <div className="grid grid-cols-1 gap-1 px-6 ">
          <table className="table-auto text-center ">
            <caption className="font-medium py-3 text-center">
              Tabla de pedidos{" "}
            </caption>
            <thead className="bg-gray ">
              <tr>
                <th className="px-6 py-3">#</th>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-blanco">
                <td className="px-6 py-4 font-medium">01</td>
                <td>Pastel Chocolate</td>
                <td>Josue Calam</td>
                <td>12-Enero-2022</td>
                <td className="flex justify-center py-3.5">
                  <div>
                    <button className=" w-15 bg-red text-blanco focus:outline-none rounded-md font-medium text-sm px-3 shadow-sm py-2 ">
                      Eliminar
                    </button>
                  </div>
                  <div className="pl-4">
                    <button className=" w-15 bg-green text-blanco focus:outline-none rounded-md font-medium text-sm px-5 shadow-sm py-2">
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pages_pedido;

