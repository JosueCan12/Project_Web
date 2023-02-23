function OrderRow({ element, index, handleChangeStatus }) {
  const handleClick = () => {
    handleChangeStatus(element.orderId).then((res) => console.log(res));
    // console.log(element.orderId);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray text-xs">
      <th scope="row" className="px-6 py-4 font-medium text-black ">
        {index}
      </th>
      <td className="px-6 py-4">
        <img
          className="max-w-[100px] p-0 m-auto"
          src={`${element.imgURL}`}
          alt=""
        />
      </td>
      <td className="px-6 py-4">
        <ul>
          <li>Sabor del pan: {element.flavor}</li>
          <li>Relleno: {element.stuffing}</li>
          <li>Tamaño: {element.size}</li>
        </ul>
      </td>
      <td className="px-6 py-4">$299</td>
      <td className="px-6 py-4">{element.orderDay}</td>
      <td className="px-6 py-4">
        <p>{element.status}</p>
      </td>
      <td>
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
