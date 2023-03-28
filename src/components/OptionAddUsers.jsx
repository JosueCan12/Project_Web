import React from "react";
import { Link } from "react-router-dom";

function OptionAddUsers() {
  return (
    <div className="pb-4 pl-5">
      <Link to="/usuarios">
        <button
          type="button"
          className="bg-pink-500 shadow-md hover: font-bold rounded w-36 text-blanco h-9 "
        >
           Usuarios
        </button>
      </Link>
    </div>
  );
}

export default OptionAddUsers;
