import { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);


    return(
        <button style={{
            background: theme==="light" ? "#FFF" : "#000",
            color:theme==="light" ? "#000" : "#FFF",
            padding:"20px",
            border:"1px solid #ccc"
            }}
            onClick={toggleTheme}
            >
            Change to {theme} theme
        </button>
    )

}

export default Button