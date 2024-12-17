import logo from "./images/icon.png"
export default function Header() {
    return (
        <>
            <header>
                <img src={logo} />
                <h1>Date Generator</h1>
            </header>
        </>
    )
}