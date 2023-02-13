import { useState } from "react";
import Modal from "../components/Modal";
import ModalInput from "../components/ModalInput";
import TableIngredient from "../components/TableIngredient";
import { useFlavors } from "../hooks/useIngredients";

function PageBreadFlavor() {
  const [showModal, setShowModal] = useState(false);
  const { flavors, createFlavor, deleteFlavor } = useFlavors();

  const handleSubmit = (form) => {
    createFlavor(form);
  };

  return (
    <div className="py-4 px-6">
      <TableIngredient
        data={flavors}
        handleShowModal={setShowModal}
        handleDelete={deleteFlavor}
        title={"Sabores"}
        navigateTo={"/ingredients/flavor"}
      />

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
          name={"flavor"}
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

export default PageBreadFlavor;
