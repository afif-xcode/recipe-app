import React from "react";

function RecipeIngedientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        name="name"
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        name="amount"
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <button
        className="btn-danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngedientEdit;
