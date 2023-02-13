import { useState } from "react";
import Modal from "../components/Modal";
import ModalInput from "../components/ModalInput";
import TableIngredient from "../components/TableIngredient";
import { useDesigns } from "../hooks/useIngredients";

function PageDesign() {
  const [showModal, setShowModal] = useState(false);
  const { designs, createDesign, deleteDesign } = useDesigns();

  const handleSubmit = (form) => {
    createDesign(form);
  };

  return (
    <div className="py-4 px-6">
      <TableIngredient
        navigateTo={"/ingredients/design"}
        data={designs}
        handleShowModal={setShowModal}
        handleDelete={deleteDesign}
        title={"Diseños"}
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
          name={"description"}
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

export default PageDesign;
