import { useState } from "react";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import NavOption from "./NavOption";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { logout } = useAuth();
  const [showSubmenus, setShowSubmenus] = useState(false);

  const handleMouseHover = () => {
    setShowSubmenus(!showSubmenus);
  };

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
          className={`absolute cursor-pointer -right-3 top-9 w-6 border-dark-purple border-2 rounded-full  ${
            !open && "rotate-180"
          }`}
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
              <ul>
                <li>
                  <NavOption route={"/ingredients/design"} title={"Diseño"} />
                </li>
                <li>
                  <NavOption
                    route={"/ingredients/size"}
                    title={"Tamaño del pan"}
                  />
                </li>
                <li>
                  <NavOption
                    route={"/ingredients/flavor"}
                    title={"Sabor del pan"}
                  />
                </li>
                <li>
                  <NavOption route={"/ingredients/stuffin"} title={"Relleno"} />
                </li>
              </ul>
            ) : null}
          </li>
          <li className="flex flex-col">
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
  );
};
export default Navbar;
