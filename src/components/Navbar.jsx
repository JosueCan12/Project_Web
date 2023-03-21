import { useState } from "react";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import NavOption from "./NavOption";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { logout } = useAuth();
  const [showSubmenus, setShowSubmenus] = useState(false);

  const handleMouseHover = () => {
    setShowSubmenus(!showSubmenus);
  };
  return (
    <nav className="w-full bg-primary text-white shadow sticky top-0 z-50">
      <div className="justify-start px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="pr-4">
              <img
                src="/src/assets/Logo-Navbar.png"
                alt=""
                className="w-[120px] object-contain"
              />
            </div>

            <div className="md:hidden ">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center space-y-8 md:flex md:space-y-0 ">
            <li>
              <NavOption
                route={"/pedidos"}
                title={"Pedidos"}
                open={open}
                imgURL={"pedido"}
              />
            </li>
            <li onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
              <NavOption
                title={"Ingredientes"}
                open={open}
                imgURL={"ingrediente"}
                disableLink={true}
              />

              {open && showSubmenus ? (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="">
                      <NavOption
                        route={"/ingredients/design"}
                        title={"Diseño"}
                      />
                    </li>
                    <li className="">
                      <NavOption
                        route={"/ingredients/size"}
                        title={"Tamaño del pan"}
                      />
                    </li>
                    <li className="">
                      <NavOption
                        route={"/ingredients/flavor"}
                        title={"Sabor del pan"}
                      />
                    </li>
                    <li className="">
                      <NavOption
                        route={"/ingredients/stuffing"}
                        title={"Relleno"}
                      />
                    </li>
                  </ul>
                </div>
              ) : null}
            </li>
            <li className="ml-auto">
              <NavOption
                route={"/"}
                handleClick={logout}
                title={"Salida"}
                open={open}
                imgURL={"salida"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
