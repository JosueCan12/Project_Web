import { useState } from "react";
import Modal from "../components/Modal";
import ModalInput from "../components/ModalInput";
import TableIngredient from "../components/TableIngredient";
import { useSizes } from "../hooks/useIngredients";

function PageDesign() {
  const [showModal, setShowModal] = useState(false);
  const { designs, createDesign } = useSizes();

  const handleSubmit = (form) => {
    createDesign(form).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="py-4 px-6">
      <TableIngredient
        data={designs}
        handleShowModal={setShowModal}
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
