function OrderRow({ element, index }) {
  console.log(element);
  // const date = new Date(element.orderDay)
  // Date.UTC()
  // console.log(Date.UTC(element.orderDay));

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray text-xs">
      <th scope="row" className="px-6 py-4 font-medium text-black ">
        {index}
      </th>
      <td className="px-6 py-4">
        <img className="max-w-[100px] p-0 m-auto" src={`${element.imgURL}`} alt="" />
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
        <p>
          {element.status}
        </p>
      </td>
    </tr>
  );
}

export default OrderRow;
