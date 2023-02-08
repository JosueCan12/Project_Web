import React from "react";

const ButtonActiveModal = ({
  setShowModal
}) => {

  return (

    <div>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          
        </button>
    </div>
  );
};

export default ButtonActiveModal;