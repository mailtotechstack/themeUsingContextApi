import "./App.css";
import ThemeController from "./component/ThemeController";
import { themeContext } from "./context/Theme";
import { useState} from "react";

export default function App(){
  const [theme, setTheme] = useState("Dark");
  return(
    <themeContext.Provider value={{theme, setTheme}}>
      <div style={{backgroundColor: theme === "Dark"? "black":"white",color: theme === "Dark"? "white":"black", transition: "0.3s all ease", minHeight: "100vh"}}>
        <ThemeController />
      </div>
    </themeContext.Provider>
  ); 
};