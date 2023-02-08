import React from "react";

import TitlePage from "../components/TitlePage";
import OptionAddUsers from "../components/OptionAddUsers";
import ComponentPedidos from './../components/ComponentPedidos';

function PagePedidos() {
  return (
    <div className="container">
      <TitlePage label="Pedidos"/>
<<<<<<< HEAD
  
      <OptionAddUsers/>
      
      <ComponentPedidos/>
      
=======
      <div className="grid grid-cols-2 gap-2 py-5 px-14 ">
        <button
          type="button"
          className="bg-blue-500 shadow-md hover: font-bold rounded w-48 text-blanco h-9"
        >
          <Link to="/usuario"> Añadir usuarios</Link>
        
        </button>
      </div>
      <div className="container w-11/12 shadow-2xl">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  dark:text-gray-200">
            <thead className="text-xs text-center text-blanco uppercase bg-gray-400 dark:bg-gray-700 dark:text-blanco">
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
            <tbody className="text-center ">
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black "
                >
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
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black "
                >
                  02
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
>>>>>>> 46f039bd0e382b371c3ae1e7a32f7dc89cbde323
    </div>
  );
}
export default PagePedidos;