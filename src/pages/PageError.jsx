import React from "react";
import { Link } from "react-router-dom";
function PageError() {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Parece que has encontrado la puerta a la gran nada
                </h1>
                <p className="my-2 text-gray-800">
                  Lo siento. Visite nuestra página de inicio para llegar a su
                  destino.
                </p>
                <Link to={"/"}>
                  <button className="sm:w-full lg:w-auto my-2 border rounded-md py-1.5 px-5 text-center bg-pink-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                    Inicio
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3230/3230724.png"
            className="w-9/12"
          />
        </div>
      </div>
    </div>
  );
}

export default PageError;
