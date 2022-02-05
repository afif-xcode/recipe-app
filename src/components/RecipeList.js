import React, { useContext } from "react";

import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="container">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="btn-container">
        <button onClick={handleRecipeAdd} className="btn-recipe btn-primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
