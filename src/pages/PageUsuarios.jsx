import React from "react";
import { useState } from "react";
import ModalUsers from "../components/ModalUsers";
import TableUsers from "../components/TableUsers";

function PageUsuarios() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-4 px-6">
      <TableUsers openModal={setShowModal} />

      {showModal && (
        <ModalUsers
          closeModal={() => setShowModal(false)}
          openModal={setShowModal}
        />
      )}
    </div>
  );
}

export default PageUsuarios;
