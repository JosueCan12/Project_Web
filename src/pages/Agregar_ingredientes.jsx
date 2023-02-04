import React from "react";
import Component_Formulario from "../components/Component_Formulario";
import Card_Ingredientes from "./../components/Card_Ingredientes";
import { useState } from "react";

const initialBd = [
  { id: 1, tamaño: "Josue", sabor: "Hola", precio: 50 },
  { id: 2, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 3, tamaño: "Josue", sabor: "descripcion", precio: 50 },
  { id: 4, tamaño: "Josue", sabor: "descripcion", precio: 50 },
];

const Agregar_ingredientes = () => {
  const [db, setdb] = useState(initialBd);
  const [dataToEdit, setdataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setdb([...db, data]);
  };
  const UpdateData = (data) => {
    let newData =db.map(el=> el.id === data.id ? data: el);
    setdb(newData);
  };
  const deleteData = (id) => {
    let isDelet = window.confirm('¿Estas seguro de eliminar ?');
    if(isDelet){
      let newData = db.filter(el => el.id !== id);
      setdb(newData);
    }else{
      return;
    }
  };
  return (
    <div className="container text-center ">
      <div className="">
        <Component_Formulario
          createData={createData}
          UpdateData={UpdateData}
          dataToEdit={dataToEdit}
          setdataToEdit={setdataToEdit}
        />
        <Card_Ingredientes
          data={db}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
};

export default Agregar_ingredientes;
