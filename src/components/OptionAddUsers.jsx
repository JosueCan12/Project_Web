import React from "react";
import { Link } from "react-router-dom";

function OptionAddUsers() {
  return (
    <div className="py-4 pl-12">
      <Link to="/usuarios">
        <button
          type="button"
          className="bg-blue-500 shadow-md hover: font-bold rounded w-48 text-blanco h-9 "
        >
          Añadir usuarios
        </button>
      </Link>
    </div>
  );
}

export default OptionAddUsers;
