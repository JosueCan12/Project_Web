import React from "react";
function TableUsers({ openModal }) {
  return (
    <section className="antialiased ">
      <div className="flex flex-col justify-center h-full justify-items-center">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-200 ">
          <header className="px-5 py-4 border-b border-gray-100 flex">
            <h2 className="font-bold text-gray-800">Lista de Usuarios</h2>
            <div className="flex ml-auto">
              <button
                className="bg-blue-600 py-1 font-normal text-white rounded-md px-2 shadow-2xl"
                onClick={() => openModal(true)}
              >
                Añadir Usuarios
              </button>
            </div>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nombre</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Rol</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Acciones</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-800">
                          Alex Shatov
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">alexshatov@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        $2,890.66
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">??</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableUsers;
