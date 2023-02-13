import FormUpdate from "../components/FormUpdate";
import FormUpdateFlavor from "../components/FormUpdateFlavor";
import { useFlavors } from "../hooks/useIngredients";

function PageUpdateFlavor() {
  const { getFlavor, updateFlavor } = useFlavors();

  return (
    <div className="container relative">
      <FormUpdateFlavor
        title={"Editar"}
        handleCharge={getFlavor}
        submitEvent={updateFlavor}
      />
    </div>
  );
}

export default PageUpdateFlavor;
