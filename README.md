# Chef Claude

Learning project: an **AI-powered recipe generator** built with **React and Vite**.  
Created to practice **React state management, props, refs, conditional rendering, form handling, API integration, modular component design, accessibility, and markdown rendering**.

## 🚀 Features
- **Ingredient Form Input**: add ingredients dynamically through a controlled form  
- **Live Ingredient List**: updates state immediately and displays added items【266†source】  
- **Conditional Rendering**: "Get Recipe" button only appears when more than 3 ingredients are listed【266†source】  
- **AI Integration**: generates recipes using custom async helpers (`getRecipeFromChefClaude`, `getRecipeFromMistral`) in `ai.js`【267†source】  
- **Smooth Scrolling UX**: auto-scrolls to the recipe section when a new recipe is generated【267†source】  
- **Markdown Rendering**: recipes are displayed in styled markdown via `react-markdown`【268†source】  
- **Accessible UI**: ingredient list and recipe containers use `aria-live` for screen reader support【266†source】【268†source】  
- **Reusable Components**: modular structure (`Header`, `Main`, `IngredientsList`, `ClaudeRecipe`) for separation of concerns  
- **Static Assets**: custom chef logo icon for branding  

## 🛠️ Tech Stack
- **React 19 (RC)** — components, hooks, JSX  
- **Vite** — fast dev/build setup  
- **JavaScript (ES6+)** — async/await, modular imports  
- **react-markdown** — render AI recipe responses in markdown  
- **Claude / Mistral AI** — integrated via helper functions in `ai.js`  
- **CSS3** — styling for layout, forms, buttons, and accessibility  

## 📂 Project Structure
```
chef-claude/
├── App.jsx               # Root component that ties everything together
├── Header.jsx            # Top-level header (outside components/)
├── Main.jsx              # Handles state, form, recipe calls, rendering logic
├── ai.js                 # AI integration helpers (Claude & Mistral fetch functions)
├── components/           # Modular reusable components
│   ├── ClaudeRecipe.jsx     # Displays AI recipes with markdown【268†source】
│   ├── Header.jsx           # Header with logo + title【265†source】
│   ├── IngredientsList.jsx  # Renders ingredient list + Get Recipe button【266†source】
│   └── Main.jsx             # Contains state, props, refs for recipes【267†source】
├── images/               # Static assets
│   └── chef-claude-icon.png
├── index.css             # Global styles and layout rules
├── index.html            # Root HTML entry
├── index.jsx             # React entry point, renders <App />
├── package.json          # Dependencies and project metadata
├── recipeCode.md         # Example generated recipe (markdown)
└── vite.config.js        # Vite configuration
```

## ⚙️ How It Works
1. User enters ingredients in the input form (`Main.jsx`), which updates state with `useState`.  
2. `IngredientsList.jsx` maps the array into `<li>` elements. If more than 3 ingredients exist, the **"Get Recipe"** button appears【266†source】.  
3. Clicking **Get Recipe** triggers `getRecipeFromChefClaude()` in `ai.js`, which fetches a recipe suggestion from Claude AI. Mistral can also be used as a fallback.  
4. The recipe is stored in state and passed to `ClaudeRecipe.jsx`, which uses `react-markdown` to render it beautifully in the UI【268†source】.  
5. A `useEffect` in `Main.jsx` auto-scrolls the viewport to the recipe container after generation for a smooth UX【267†source】.  
6. Accessibility is improved with `aria-live` regions so screen readers announce updates as they occur【266†source】【268†source】.  

## 📈 Learning Purpose
This project helped me practice:  
- **React fundamentals**: functional components, props, state with `useState`  
- **Side effects**: `useEffect` for smooth scrolling on state changes  
- **Refs**: `useRef` to programmatically scroll to content【267†source】  
- **Form handling**: controlled form inputs and state updates for ingredients  
- **Conditional rendering**: dynamically showing buttons/components based on array length【266†source】  
- **Props drilling & modular design**: passing data down to child components for clean separation of logic  
- **AI integration**: calling external APIs (Claude & Mistral) via custom helpers (`ai.js`)  
- **Async/await patterns**: handling asynchronous recipe fetch calls gracefully  
- **Markdown support**: rendering structured AI responses with `react-markdown`【268†source】  
- **Accessibility best practices**: using semantic HTML and `aria-live` for screen reader support  
- **Project organization**: separating components, assets, styles, and helpers in a clear file structure  
- **Styling in React**: building a polished, responsive UI with CSS and consistent layout  

---

⚠️ **Note**: This was built purely as a **learning project** and is not intended for production use.
