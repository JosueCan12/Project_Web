import { useState } from "react";
import Modal from "../components/Modal";
import ModalInput from "../components/ModalInput";
import TableIngredient from "../components/TableIngredient";
import { useSizes } from "../hooks/useIngredients";

function PageStuffing() {
  const [showModal, setShowModal] = useState(false);
  const { stuffings, createStuffing } = useSizes();

  const handleSubmit = (form) => {
    createStuffing(form);
  };

  return (
    <div className="py-4 px-6">
      <TableIngredient data={stuffings} handleShowModal={setShowModal} title={"Rellenos"} />

      {/* Modal Component */}

      <Modal
        handleShowModal={setShowModal}
        showModal={showModal}
        submitEvent={handleSubmit}
        title={"Agregar"}
      >
        <ModalInput
          type={"text"}
          label={"Nombre"}
          name={"stuffing"}
          placeholder={"Nombre"}
        />
        <ModalInput
          type={"number"}
          label={"Precio"}
          name={"price"}
          placeholder={"Precio"}
        />
        <ModalInput type={"file"} label={"Imagen"} name={"imagen"} />
      </Modal>
    </div>
  );
}

export default PageStuffing;
