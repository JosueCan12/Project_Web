import React from "react";

function ComponentPedidos() {
  return (
    <div className="container w-11/12 shadow-2xl">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  dark:text-gray-200">
          <thead className="text-xs text-center text-blanco uppercase bg-gray-600 dark:bg-gray-700 dark:text-blanco">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center uppercase ">
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray">
              <th scope="row" className="px-6 py-4 font-medium text-black ">
                01
              </th>
              <td className="px-6 py-4">Josue Can</td>
              <td className="px-6 py-4">Pastel</td>
              <td className="px-6 py-4">$299</td>
              <td className="px-6 py-4">05-Ene-2023</td>
              <td className="px-6 py-4">
                <button className="bg-red-700 px-4 py-1 text-blanco rounded-xl">
                  Delet
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComponentPedidos;
