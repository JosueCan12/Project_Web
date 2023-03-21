import React from "react";
import ComponentRegister from "./ComponentRegister";

function ModalUsers({ closeModal, openModal }) {
  return (
    //  Main modal
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-lg w-1/2">
        <div
          className={`${
            openModal ? "absolute" : "hidden"
          } inset-0 z-10 overflow-y-auto grid place-items-center`}
          style={{ display: "grid", placeItems: "center" }}
        >
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mx-auto "> 
            <div className="flex justify-end p-2">
              <button
                onClick={() => closeModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <ComponentRegister closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUsers;
