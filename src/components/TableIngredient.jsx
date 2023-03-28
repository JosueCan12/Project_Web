import { Children } from "react";
import TableIngredientRow from "./TableIngredientRow";

function TableIngredient({
  data,
  title,
  handleShowModal,
  navigateTo,
  handleDelete = () => {},
}) {
  return (
    <div className="w-full xl:w-11/12 xl:mb-0 mx-auto -z-30">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl">
        <div className="px-4 py-3 bg-[#03254e] text-black border-b border-[#03254e] rounded-t-md rounded-tl-md">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-white">{title}</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-pink-500 text-white text-xs font-bold uppercase px-3 py-1.5 rounded"
                onClick={() => {
                  handleShowModal(true);
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto b-0">
          <table className="items-center w-full border-collapse">
            <thead className="bg-[#545677] font-bold text-white">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  #
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Imagen
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Nombre
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Precio
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((element, index) => {
                return (
                  <TableIngredientRow
                    navigateTo={navigateTo}
                    id={element.id}
                    imgURL={element.imgURL}
                    nombre={element.nombre}
                    precio={element.precio}
                    status={element.status}
                    handleDelete={handleDelete}
                    index={index + 1}
                    key={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableIngredient;
