import React from "react";
import { useOrders } from "../hooks/useOrders";
import OrderRow from "./OrderRow";

function ComponentPedidos() {
  const { orders, changeStatus } = useOrders() || {orders: [], changeStatus: ()=>{}};

  return (
    <div className="container w-11/12 shadow-2xl mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  dark:text-gray-200">
          <thead className="text-xs text-center text-blanco uppercase bg-gray-600 dark:bg-gray-700 dark:text-blanco">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Diseño
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha de entrega
              </th>
              <th scope="col" className="px-6 py-3">
                Estatus
              </th>
              <th scope="col" className="px-8 py-3">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="text-center uppercase ">
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
  );
}

export default ComponentPedidos;
