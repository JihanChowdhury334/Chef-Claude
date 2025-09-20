# 🍳 Chef Claude

Chef Claude is a React app that suggests recipes based on the
ingredients you enter. You type in what you have on hand, and the app
will use AI (Anthropic Claude or HuggingFace Mistral) to generate a
recipe. The recipe is displayed directly on the page in a simple and
readable format. \## Features - Add ingredients one at a time and see
them listed - Once you have at least 4 ingredients, a **Get a recipe**
button appears - Clicking the button sends your ingredients to an AI
model (Claude or Mistral) - The AI replies with a recipe suggestion -
Recipes are displayed clearly using markdown rendering - Clean and
minimal interface, styled with CSS \## Project Structure

    App.jsx              → Root component, renders Header + Main
    Main.jsx             → Handles state for the ingredients list and recipe
    Header.jsx           → App header with logo and title
    IngredientsList.jsx  → Displays all ingredients and the "Get a recipe" button
    ClaudeRecipe.jsx     → Displays the generated recipe
    ai.js                → Functions for calling Anthropic Claude & HuggingFace Mistral APIs
    index.jsx            → React entry point
    index.html           → Root HTML file
    index.css            → Styling
    recipeCode.md        → Example recipe output
    images/              → App logo

## Setup

1.  Clone the repository:

    ``` bash
    git clone https://github.com/your-username/chef-claude.git
    cd chef-claude
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Create a `.env` file in the root folder with your API keys:

    ``` env
    ANTHROPIC_API_KEY=your_anthropic_key_here
    HF_ACCESS_TOKEN=your_huggingface_key_here
    ```

    ⚠️ Do not commit this file to GitHub.

4.  Run the app:

    ``` bash
    npm run dev
    ```

    Open in your browser: <http://localhost:5173> \## How It Works

5.  Enter ingredients in the input field\

6.  Ingredients display in a dynamic list\

7.  Once you have more than 3 ingredients, the **Get a recipe** button
    appears\

8.  Clicking it sends your list to Claude or Mistral\

9.  The AI suggests a recipe, which is shown below the list\
    \## Example **Input Ingredients:**
    `chicken, corn, heavy cream, pasta`\
    **AI Suggestion:** *Beef Bolognese Pasta* (with full recipe
    instructions) \## Tech Stack

-   React + Vite\
-   CSS (custom, Google Fonts)\
-   Anthropic Claude API\
-   HuggingFace Inference API (Mistral)\
-   `react-markdown` for rendering recipes\
    \## Future Improvements
-   Toggle between Claude and Mistral\
-   Save favorite recipes locally\
-   Add error handling and loading states\
-   Improve UI with Tailwind or ShadCN\
    \## License MIT License
