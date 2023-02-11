import { useState } from "react";
import FormUpdate from "../components/FormUpdate";
import Modal from "../components/Modal";
import ModalInput from "../components/ModalInput";
import TableIngredient from "../components/TableIngredient";
import { useSizes } from "../hooks/useIngredients";

function PageBreadSize() {
  const [showModal, setShowModal] = useState(false);
  const { sizes, createIngredient: createSize } = useSizes();

  const handleSubmit = (form) => {
    createSize(form);
  };

  return (
    <div className="py-4 px-6">
      <TableIngredient
        data={sizes}
        handleShowModal={setShowModal}
        Modal={FormUpdate}
        title={"Tamaños"}
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
          name={"size"}
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

export default PageBreadSize;
