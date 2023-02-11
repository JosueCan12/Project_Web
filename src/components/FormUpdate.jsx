import { useState } from "react";

function FormUpdate({ title, handleShowModal, showModal, submitEvent }) {
  // const [form, setForm] = useState({});

  // const handleChange = (event) => {
  //   const input = event.target;
  //   const type = input.attributes.type.nodeValue;

  //   if (input.name === "submit") {
  //     return;
  //   }

  //   if (type === "file") {
  //     setForm({
  //       ...form,
  //       [input.name]: input.files[0],
  //     });

  //     return;
  //   }
  //   setForm({ ...form, [input.name]: input.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let messageError = "";

  //   [...event.target].forEach((element) => {
  //     if (
  //       (Object.hasOwnProperty.call(form, element.name) &&
  //         form[element.name] !== "" &&
  //         form[element.name] !== undefined) ||
  //       element.value !== "" ||
  //       (element.attributes.type.nodeValue === "file" && element.files > 0) ||
  //       element.name === "submit"
  //     ) {
  //       const input = element;
  //       const type = input.attributes.type.nodeValue;

  //       if (input.name === "submit") {
  //         return;
  //       }

  //       if (type === "file") {
  //         setForm({
  //           ...form,
  //           [input.name]: input.files[0],
  //         });
  //         return;
  //       }
  //       console.log(form);
  //       console.log({ [input.name]: input.value });
  //       setForm({ ...form, [input.name]: input.value });

  //       return;
  //     }
  //     // console.log(`El campo ${element.labels[0].outerText} esta vacio`);
  //     messageError = `${messageError} El campo ${element.labels[0].outerText} esta vacío \n`;
  //   });

  //   if (messageError !== "") {
  //     alert(messageError);
  //     return;
  //   }

  //   alert("Todo esta correcto");
  //   // console.log(form);
  //   submitEvent(form);
  // };

  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-600 bg-opacity-70 w-full h-full z-30 py-3`}
    >
      <div className="bg-white max-w-[500px] w-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md max-h-full overflow-y-scroll">
        <div className="flex justify-between">
          <h1>{title}</h1>
          <button
            className="text-gray-300 hover:text-black transition-all duration-75 text-lg"
            onClick={() => {
              handleShowModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0 " />

        <form className="flex flex-col rounded-md mt-4">
          {/* ... */}
          <div className="flex flex-col">
            <label
              htmlFor="size"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Tamaño:
            </label>
            <input type="file" id="size" name="size" className="" />
          </div>

          {/* .... */}
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Precio
            </label>
            <input type="file" id="price" name="price" className="" />
          </div>
          <input
            className="block bg-blue-200 py-2 px-3 rounded-md hover:bg-blue-600 hover:text-gray-100 "
            type="submit"
            name="submit"
            value="Enviar"
          />

          {/* ... */}
          <div className="flex flex-col">
            <label
              htmlFor="imagen"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Imagen
            </label>
            <input type="file" id="imagen" name="imagen" className="" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUpdate;
