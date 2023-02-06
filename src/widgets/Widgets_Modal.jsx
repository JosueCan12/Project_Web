import React from "react";

function Widgets_Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h1 className="text-center pt-5  pb-8 text-2xl font-bold text-botones ">
                      {dataToEdit ? "Editar" : "Agregar "}
                    </h1>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form
                      className=" shadow-xl bg-gray-100"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex mb-6">
                        <div className="w-full md:w-1/1 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Upload file
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="user_avatar_help"
                            id="user_avatar"
                            type="file"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Tamaño
                          </label>
                          <input
                            className="appearance-none block w-full  bg-write text-black border border-gray  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                            type="text"
                            name="tamaño"
                            onChange={handleChange}
                            placeholder="Tamaño"
                            value={form.tamaño}
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Sabor
                          </label>
                          <input
                            className="appearance-none block w-full bg-write text-black border border-gray rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                            type="text"
                            name="sabor"
                            onChange={handleChange}
                            placeholder="Sabor"
                            value={form.sabor}
                          />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Precio
                          </label>
                          <input
                            className="appearance-none block w-full bg-write text-black border border-gray rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                            type="number"
                            name="precio"
                            onChange={handleChange}
                            placeholder="Precio"
                            value={form.precio}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center pb-5">
                        <div className="pl-4">
                          <input
                            type="submit"
                            value="Guardar"
                            className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-2 px-4 border border-gray rounded shadow"
                          />
                        </div>

                        <div className="px-4">
                          <input
                            type="reset"
                            value="Limpiar"
                            onClick={handleReset}
                            className="bg-white hover:bg-gray-200 text-red-600 font-semibold py-2 px-4 border border-gray rounded shadow"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-white text-blue-500 active:bg-teal-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default Widgets_Modal;
