import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>theme is {theme}</p>
      <button className={theme + "ButtonTheme"} onClick={toggleTheme}>change theme</button>
    </div>
  );
};

export default ThemeSwitcher;
