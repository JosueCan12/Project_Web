import { Table } from "./Card";

const Card_Ingredientes = ({ data,setdataToEdit,deleteData }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-medium py-4">Ingredientes</h1>
      <div className="grid grid-cols-5 grap-5 ">
        {data.length === 0 ? (
          <div className="col-span-5">
            {" "}
            <h1 className="text-center font-bold text-red text-3xl my-5 ">Sin datos</h1>
          </div>
        ) : (
          data.map((el) => <Table key={el.id} el={el} setdataToEdit={setdataToEdit} deleteData={deleteData}/>)
        )}
      </div>
    </div>
  );
};

export default Card_Ingredientes;
