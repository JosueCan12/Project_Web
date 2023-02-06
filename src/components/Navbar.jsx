import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Pedidos", src: "pedido", route: "/" },
    { title: "Ingredientes", src: "ingrediente", route: "/ingredientes" },
    { title: "Salir", src: "salida", route: "/cerrar" },
  ];
  return (
    <div className=" relative ">
      <div
        className={` ${
          open ? "w-60" : "w-24"
        } bg-blanco h-screen p-6 col-span-6 pt-8 duration-300 shadow-lg sticky top-0  `}
      >
        <img
          src="./src/assets/control.png"
          style={{ width: 35 }}
          className={`absolute cursor-pointer -right-3 top-9 w-6 border-dark-purple 
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <img
            src="./src/assets/logo.png"
            style={{ height: 30 }}
            className={`cursor-pointer duration-500 text-center ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            PanDeli
          </h1>
        </div>
        <ul className="pt-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md ${
                open ? "p-4 " : "p-3  justify-center"
              } hover:bg-gray hover:text-blue gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-5"} `}
            >
              <Link to={Menu.route} className="flex">
                <img
                  src={`./src/assets/${Menu.src}.png`}
                  style={{ width: 25 }}
                />
                <span
                  className={`${
                    !open && "hidden"
                  }  origin-left duration-200 font-bold px-5`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
