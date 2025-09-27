import chefIcon from "../images/chef-claude-icon.png" // you can rename this image later

export default function Header() {
    return (
        <header>
            <img src={chefIcon} alt="AI Chef logo"/>
            <h1>AI Recipe Generator</h1>
        </header>
    )
}
