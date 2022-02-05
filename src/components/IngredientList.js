import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientList = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient}></Ingredient>;
  });
  return <div className="ingredient-grid">{ingredientList}</div>;
}
