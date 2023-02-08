import React from "react";
import { useState } from "react";
import TitlePage from "../components/TitlePage";
import OptionsContainer from "../components/OptionsContainer";
import ButtonActiveModal from "../components/ComponentFormulario";
import IngredientsContainer from "../components/IngredientsContainer";
import ModalForm from "../components/ModalForm";
import ContainerRelleno from "../components/ContainerRelleno";
const initialBd = [
  { id: 1, tamaño: "Josue", sabor: "Hola", precio: 50 },
  { id: 2, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 3, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 4, tamaño: "Josue", sabor: "descripcion", precio: 50 },
];


const PagesIngredientes = () => {
  const [db, setdb] = useState(initialBd);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setdb([...db, data]);
  };
  const UpdateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setdb(newData);
  };
  const deleteData = (id) => {
    let isDelet = window.confirm('¿Estas seguro de eliminar ?');
    if (isDelet) {
      let newData = db.filter(el => el.id !== id);
      setdb(newData);
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <TitlePage label="Ingredientes" />

      <OptionsContainer showModal={setShowModal} />

      {
        showModal
          ? (
            <ModalForm setShowModal={setShowModal} createData={createData} UpdateData={UpdateData} dataToEdit={dataToEdit} setdataToEdit={setdataToEdit} />
          )
          : null
      }
      <div className="text-center">

        <IngredientsContainer
          data={db}
          setShowModal={setShowModal}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        />
      </div>

      <div className="text-center">

        <ContainerRelleno
          data={db}
          setShowModal={setShowModal}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        />
      </div>

      {/* <IngredientsSection /> */}

    </div>
  );
};

export default PagesIngredientes;
