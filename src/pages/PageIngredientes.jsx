import React from "react";
import TitlePage from "../components/TitlePage";
import OptionsContainer from "../components/OptionsContainer";
import IngredientsSection from "../components/IngredientsSection";


const PagesIngredientes = () => {
  return (
    <div className="container">
      <TitlePage label="Ingredientes"/>
      
      <OptionsContainer />

      <IngredientsSection />

    </div>
  );
};

export default PagesIngredientes;
