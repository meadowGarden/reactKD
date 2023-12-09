import BasicComponent from "./basicComponent/BasicComponent";
import Sample01 from "./componentWithProps/Sample01";
import Sample02 from "./componentWithProps/Sample02";
import Sample03 from "./componentWithProps/Sample03";
import ThemeProvider from "./hooks/changeTheme/ThemeProvider";
import ThemeSwitcher from "./hooks/changeTheme/ThemeSwitcher";
import LessText from "./hooks/LessText";
import MyTeam from "./hooks/MyTeam";
import StepCounter from "./hooks/StepCounter";
import ContainerComponent from "./hooks/changeTheme/ContainerComponent";
import Posts_static from "./fetch/Posts_static";
import Posts_API from "./fetch/Posts_API";
import Products from "./fetch/Products";
//npm i --save bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./site/Homepage";
import NavbarMK1 from "./site/NavbarMK1"
import PageNotFound from "./site/PageNotFound";
import IceCreamStand from "./nd_iceCream/IceCreamStand";

function App() {
  return (
    <>
      <NavbarMK1 />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/basiccomponent" element={<BasicComponent />} />

        <Route
          path="/sample01"
          element={<Sample01 varSample="sample of variable" />}
        />
        <Route path="/sample02" element={<Sample02 />} />
        <Route path="/sample03" element={<Sample03 />} />

        <Route path="/lesstext" element={<LessText />} />
        <Route path="/stepcounter" element={<StepCounter />} />
        <Route path="/myteam" element={<MyTeam />} />

        <Route path="/posts_static" element={<Posts_static />} />
        <Route path="/posts_api" element={<Posts_API />} />
        <Route path="/products_from_class" element={<Products />} />

        <Route path="/icecream" element={<IceCreamStand />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      {/* <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <ThemeProvider>
        <ContainerComponent>
          <ThemeSwitcher />
        </ContainerComponent>
      </ThemeProvider> */}
    </>
  );
}

export default App;
