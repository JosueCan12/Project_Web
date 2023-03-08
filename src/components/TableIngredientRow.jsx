import { useNavigate } from "react-router-dom";

function TableIngredientRow({
  navigateTo,
  index,
  id,
  imgURL,
  nombre,
  precio,
  status,
  handleDelete,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${navigateTo}/${id} `);
  };

  const handleClickDelete = () => {
    handleDelete(id).then((res) => {
      console.log(res);
    });
  };

  return (
    <tr className={!status ? "bg-pink-200" : "odd:bg-pink-200 even:bg-gray-50 text-gray-700 text-base"}>
      <th className=" text-center border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-blueGray-700 ">
        {index}
      </th>
      <td className=" flex justify-center border-t-0 px-6 p-4">
        <img className="max-w-[100px]" src={imgURL} alt="" />
      </td>
      <td className=" text-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
        {nombre}
      </td>
      <td className="text-center  border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
        {precio}
      </td>
      <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
        <div className="flex justify-center ">
        <div className="items-center flex pr-2">
          <button
            className="rounded bg-green-400 py-1 px-3 font-bold text-white"
            onClick={handleClick}
          >
            Editar
          </button>
        </div>
        <div className="items-center flex pl-2">
          <button
            className={`rounded ${
              !status ? "bg-blue-400" : "bg-red-600"
            } py-1 px-3 font-bold text-white`}
            onClick={handleClickDelete}
          >
            {status ? "Dar de baja" : "Activar"}
          </button>
        </div>
        </div>
        
      </td>
    </tr>
  );
}

export default TableIngredientRow;
