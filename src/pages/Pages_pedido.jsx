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
          className="bg-blue-500 shadow-md hover: font-bold rounded w-48 text-blanco h-9"
        >
          <Link to="/usuario"> Añadir usuarios</Link>
        
        </button>
      </div>
      <div className="container w-11/12 shadow-2xl">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left  dark:text-gray-200">
            <thead class="text-xs text-center text-blanco uppercase bg-gray-400 dark:bg-gray-700 dark:text-blanco">
              <tr>
                <th scope="col" class="px-6 py-3">
                 #
                </th>
                <th scope="col" class="px-6 py-3">
                  Cliente
                </th>
                <th scope="col" class="px-6 py-3">
                  Producto
                </th>
                <th scope="col" class="px-6 py-3">
                  Precio
                </th>
                <th scope="col" class="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
                
              </tr>
            </thead>
            <tbody className="text-center ">
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-black "
                >
                  01
                </th>
                <td class="px-6 py-4">Josue Can</td>
                <td class="px-6 py-4">Pastel</td>
                <td class="px-6 py-4">$299</td>
                <td class="px-6 py-4">05-Ene-2023</td>
                <td class="px-6 py-4">
                  <button className="bg-red-700 px-4 py-1 text-blanco rounded-xl">
                    Delet
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-black "
                >
                  02
                </th>
            <td class="px-6 py-4">Josue Can</td>
                <td class="px-6 py-4">Pastel</td>
                <td class="px-6 py-4">$299</td>
                <td class="px-6 py-4">05-Ene-2023</td>
                <td class="px-6 py-4">
                <button className="bg-red-700 px-4 py-1 text-blanco rounded-xl">
                    Delet
                  </button>
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