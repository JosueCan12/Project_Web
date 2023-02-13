import FormUpdate from "../components/FormUpdate";
import { useSizes } from "../hooks/useIngredients";

function PageUpdate() {
  const { getSize, updateSize } = useSizes();

  return (
    <div className="container relative">
      <FormUpdate
        title={"Editar"}
        handleCharge={getSize}
        submitEvent={updateSize}
      />
    </div>
  );
}

export default PageUpdate;
