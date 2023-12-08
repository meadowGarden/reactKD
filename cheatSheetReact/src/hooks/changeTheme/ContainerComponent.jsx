import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ContainerComponent = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme + "MainContainer"}>{children}</div>;
};

export default ContainerComponent;
