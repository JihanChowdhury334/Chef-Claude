import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("")
  const [loading, setLoading] = React.useState(false) // 👈 loading state

  function addIngredient(ingredient) {
    setIngredients(prev => [...prev, ingredient])
  }

  async function getRecipe() {
    setLoading(true) // show spinner
    setRecipe("") // clear old recipe
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
    setLoading(false) // hide spinner
  }

  return (
    <main>
      <IngredientsList
        ingredients={ingredients}
        onAdd={addIngredient}
        onGetRecipe={getRecipe}
      />

      {loading && (
        <div style={{ textAlign: "center" }}>
          <div className="spinner"></div>
          <p>🍳 Cooking up a recipe...</p>
        </div>
      )}

      {!loading && recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}
