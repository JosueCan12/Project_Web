import React from "react";
import "../App.css"
function Login() {
  return (
    <section className="max-w-full dark:bg-gray-900 bg-image">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-xl ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight md:text-2xl text-blue-700 dark:text-white py-5">
              ¡Bienviendo!
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="">
                <label
                  
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escribe tu usuario"
                  required=""
                />
              </div>
              <div className="pt-1">
                <label
                  
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Escribe tu contraseña"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    
                  </div>
                  <div className="ml-3 text-sm">
                  <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
                  </div>
                </div>
                
              </div>
              <div className="py-3">
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Iniciar sesion
              </button>
              </div>
              
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
