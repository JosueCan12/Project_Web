import FormUpdate from "../components/FormUpdate";
import FormUpdateDesign from "../components/FormUpdateDesing";
import { useDesigns } from "../hooks/useIngredients";

function PageUpdateDesign() {
  const { getDesign, updateDesign} = useDesigns();

  return (
    <div className="container relative">
      <FormUpdateDesign
        title={"Editar"}
        handleCharge={getDesign}
        submitEvent={updateDesign}
      />
    </div>
  );
}

export default PageUpdateDesign;
