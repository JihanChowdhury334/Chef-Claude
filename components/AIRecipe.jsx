import ReactMarkdown from "react-markdown"

export default function AIRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Your AI-Generated Recipe:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
