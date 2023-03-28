import React, { useEffect } from "react";
import { useState } from "react";
import ModalUsers from "../components/ModalUsers";
import TableUsers from "../components/TableUsers";
import { useAuth } from "../hooks/useAuth";

function PageUsuarios() {
  const [showModal, setShowModal] = useState(false);
  const { showWorkers } = useAuth();

  useEffect(() => {
    showWorkers();
  }, []);

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
