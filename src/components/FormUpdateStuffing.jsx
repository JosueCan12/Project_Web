import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FormUpdateStuffing({ title, handleCharge, submitEvent }) {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    handleCharge(params.id).then((res) => {
      res = {
        stuffing: res.stuffing,
        price: res.price,
      };
      setForm(res);
    });
  }, []);

  const handleChange = (event) => {
    const input = event.target;

    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  const handleSubmit = (event) => {
    const inputs = [...event.target];

    event.preventDefault();

    inputs.forEach((element) => {
      const input = element;
      const typeInput = input.attributes.type.nodeValue;

      if (typeInput === "submit") {
        return;
      }

      if (typeInput === "number" && parseInt(input.value) <= 0) {
        console.log("Ingrese un valor valido");
      }

      if (typeInput === "file" && input.files.length <= 0) {
        console.log("no hay imagen");
        return;
      }
    });

    submitEvent(params.id, form);
    navigate(-1)
  };

  return (
    <div className="bg-white max-w-[500px] m-auto mt-5 w-full rounded-md border border-gray-200 max-h-full shadow-2xl py-2 px-3">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          className="text-gray-300 hover:text-black transition-all duration-75 text-lg"
          onClick={() => {
            navigate(-1);
          }}
        >
          &times;
        </button>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 " />

      <form className="flex flex-col rounded-md mt-4" onSubmit={handleSubmit}>
        {/* ... */}
        <div className="flex flex-col">
          <label
            htmlFor="stuffing"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Tamaño:
          </label>
          <input
            type="text"
            id="stuffing"
            name="stuffing"
            value={form.stuffing || ""}
            onChange={handleChange}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>

        {/* .... */}
        <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Precio
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>
        {/* ... */}
        <div className="flex flex-col">
          <label
            htmlFor="imagen"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Imagen
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            onChange={handleChange}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </div>
        <input
          className="block bg-blue-200 py-2 px-3 rounded-md hover:bg-blue-600 hover:text-gray-100 "
          type="submit"
          name="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}

export default FormUpdateStuffing;
