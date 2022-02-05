import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const recipeContextvalue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
    handleRecipeSelect: handleRecipeSelect,
    handleRecipeChange: handleRecipeChange,
  };

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipe = [...recipes];
    const index = newRecipe.findIndex((r) => r.id === id);
    newRecipe[index] = recipe;
    setRecipes(newRecipe);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextvalue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Maggie",
    servings: 3,
    cookTime: "2:00",
    instructions: "1.Add Water\n2.Add Maggie\n3.Boil\n4.Serve and eat",
    ingredients: [
      {
        id: 1,
        name: "Maggie",
        amount: "5",
      },
      {
        id: 2,
        name: "Water",
        amount: "100mL",
      },
    ],
  },
  {
    id: 2,
    name: "Boiled Egg",
    servings: 3,
    cookTime: "2:00",
    instructions: "1.Add Water\n2.Add Maggie\n3.Boil\n4.Serve and eat",
    ingredients: [
      {
        id: 1,
        name: "Maggie",
        amount: "5",
      },
      {
        id: 2,
        name: "Water",
        amount: "100mL",
      },
    ],
  },
];

export default App;
