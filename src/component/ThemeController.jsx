
import { themeContext } from "../context/Theme";
import { useContext } from "react";
export default function ThemeController(){
    const {theme, setTheme} = useContext(themeContext);
    // console.log(theme);
    return(
        <div style={{backgroundColor: theme === "Dark"? "green":"purple",color: theme === "Dark"? "white":"black"}}>
            Hey i am theme
            <button onClick={()=>{setTheme(theme==="Dark" ? "Light" : "Dark")}}>Change</button>
        </div>
    )
}