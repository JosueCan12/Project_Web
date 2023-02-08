import React from "react";
import ButtonActiveModal from "./ComponentFormulario";
import IngredientsContainer from "./IngredientsContainer";
import { useState } from "react";
import ModalForm from "./ModalForm";
import ContainerRelleno from './ContainerRelleno';

const initialBd = [
  { id: 1, tamaño: "Josue", sabor: "Hola", precio: 50 },
  { id: 2, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 3, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 4, tamaño: "Josue", sabor: "descripcion", precio: 50 },
];

const IngredientsSection = () => {
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
    <div className="container text-center ">
      <ButtonActiveModal
        setShowModal={setShowModal}
      />

      {
        showModal
          ? (
            <ModalForm setShowModal={setShowModal} createData={createData} UpdateData={UpdateData} dataToEdit={dataToEdit} setdataToEdit={setdataToEdit} />
          )
          : null
      }
      
      <IngredientsContainer
        data={db}
        setShowModal={setShowModal}
        setdataToEdit={setdataToEdit}
        deleteData={deleteData}
      />
    
     <ContainerRelleno
      data={db}
      setShowModal={setShowModal}
      setdataToEdit={setdataToEdit}
      deleteData={deleteData}/> 
    </div>
  );
};

export default IngredientsSection;
