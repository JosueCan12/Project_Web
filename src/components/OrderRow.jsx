/* import "../styles/table.css"; */

function OrderRow({ element, index, handleChangeStatus }) {
  const handleClick = () => {
    handleChangeStatus(element.orderId).then((res) => console.log(res));
    // console.log(element.orderId);
  };

  return (
    <tr>
      <th
        scope="row"
        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
      >
        {index}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">
          <img
            className="max-w-[100px] p-0 m-auto w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
            src={`${element.imgURL}`}
            alt=""
          />
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <ul>
          <li>Sabor del pan: {element.flavor}</li>
          <li>Relleno: {element.stuffing}</li>
          <li>Tamaño: {element.size}</li>
        </ul>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$299</td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {element.orderDay}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>{element.status}</p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {element.status != "order finished" ? (
          <button
            className="bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-800 transition-all duration-100"
            onClick={handleClick}
          >
            Finalizar
          </button>
        ) : null}
      </td>
    </tr>
  );
}

export default OrderRow;
