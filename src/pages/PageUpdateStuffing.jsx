import FormUpdate from "../components/FormUpdate";
import FormUpdateStuffing from "../components/FormUpdateStuffing";
import { useStuffings } from "../hooks/useIngredients";

function PageUpdateStuffing() {
  const { getStuffing, updateStuffing } = useStuffings();

  return (
    <div className="container relative">
      <FormUpdateStuffing
        title={"Editar"}
        handleCharge={getStuffing}
        submitEvent={updateStuffing}
      />
    </div>
  );
}

export default PageUpdateStuffing;
