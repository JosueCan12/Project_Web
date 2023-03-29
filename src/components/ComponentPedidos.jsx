import React from "react";
import { useOrders } from "../hooks/useOrders";
import OrderRow from "./OrderRow";

function ComponentPedidos() {
  const { orders, changeStatus } = useOrders() || {
    orders: [],
    changeStatus: () => {},
  };

  return (
    <section className="relative ">
      {orders.length <= 0 ? (
        <h3 className="w-full text-center">No hay ordenes en este momento</h3>
      ) : (
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0  w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0 bg-[#03254e] text-black border-b border-[#03254e]">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 className="font-semibold text-lg text-white">Pedidos</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse text-white ">
                <thead className="bg-[#545677] font-bold text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  "
                    >
                      Diseño
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Cliente
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Fecha de entrega
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Estatus
                    </th>
                    <th
                      scope="col"
                      className="px-6 align-middle border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((ele, index) => (
                    <OrderRow
                      element={ele}
                      index={index + 1}
                      handleChangeStatus={changeStatus}
                      key={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ComponentPedidos;
