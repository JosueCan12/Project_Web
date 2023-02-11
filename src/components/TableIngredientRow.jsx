import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import ModalInput from "./ModalInput";

function TableIngredientRow({
  fun = () => {},
  index,
  id,
  imgURL,
  nombre,
  precio,
  Modal,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {index}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        <img className="max-w-[100px]" src={imgURL} alt="" />
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {nombre}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {precio}
      </td>
      <td className="h-full flex justify-around items-center border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button
          className="rounded bg-green-400 py-1 px-3 text-xs font-bold"
          onClick={handleClick}
        >
          Editar
        </button>
        <button
          className="rounded bg-red-400 py-1 px-3 text-xs font-bold"
          // onClick={fun}
        >
          Dar de baja
        </button>
      </td>
      <Modal />
    </tr>
  );
}

export default TableIngredientRow;
