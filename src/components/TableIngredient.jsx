import { Children } from "react";
import TableIngredientRow from "./TableIngredientRow";

function TableIngredient({ data, title, handleShowModal, Modal }) {
  return (
    <div className="w-full xl:w-11/12 xl:mb-0 mx-auto -z-30">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                {title}
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded"
                onClick={() => {
                  handleShowModal(true);
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  #
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Imagen
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nombre
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Precio
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((element, index) => (
                <TableIngredientRow
                  id={element.id}
                  imgURL={element.imgURL}
                  nombre={element.nombre}
                  precio={element.precio}
                  index={index + 1}
                  Modal={Modal}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableIngredient;
