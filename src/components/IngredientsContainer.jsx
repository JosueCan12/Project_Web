import CardIngredient from "./CardIngredient";

const IngredientsContainer = ({ data = [], setdataToEdit, deleteData, setShowModal }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grap-5 ">
      {
        data.length === 0
          ? (<div className="col-span-5">
            <h1 className="text-center font-bold text-red-600 text-3xl my-5 ">Sin datos</h1>
          </div>)
          : data.map((dato, index) => {
            return (
              <CardIngredient key={index} element={dato} setdataToEdit={setdataToEdit} deleteData={deleteData} setShowModal={setShowModal} />
            )
          })
      }
    </div>
  );
};

export default IngredientsContainer;
