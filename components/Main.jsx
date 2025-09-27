import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"   // keep the name as-is
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const recipeSection = React.useRef(null)
    
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe])

async function getRecipe() {
  console.log("Getting recipe from Mistral...")
  setLoading(true)        // 👈 show spinner
  setRecipe("")           // clear old recipe
  const recipeMarkdown = await getRecipeFromMistral(ingredients)
  setRecipe(recipeMarkdown)
  setLoading(false)       // 👈 hide spinner
}


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

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
