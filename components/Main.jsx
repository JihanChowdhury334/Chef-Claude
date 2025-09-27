import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("")

  function addIngredient(ingredient) {
    setIngredients(prev => [...prev, ingredient])
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
      <IngredientsList
        ingredients={ingredients}
        onAdd={addIngredient}
        getRecipe={getRecipe}
      />
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}
