import React from "react";
import { Link } from "react-router-dom";

function OptionAddUsers() {
  return (
    
    <div className="py-4 pl-12">
      <button
        type="button"
        className="bg-blue-500 shadow-md hover: font-bold rounded w-48 text-blanco h-9 "
      >
        <Link to="/usuario"> Añadir usuarios</Link>
      </button>
    </div>
  );
}

export default OptionAddUsers;
