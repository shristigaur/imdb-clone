import { useContext } from "react";
import { ThemeContext } from "../Theme";

function Header(){
    const {theme} = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <p>current theme: {theme}</p>
        </header>
    )
}