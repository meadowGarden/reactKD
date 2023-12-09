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

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider> */}

      <ThemeProvider>
        <ContainerComponent>
          <ThemeSwitcher />
        </ContainerComponent>
      </ThemeProvider>

      <div>
        <h1>basic component</h1>
        <BasicComponent />
        <hr />
        <h1>components with a flavour</h1>
        <Sample01 varSample="sample of variable" />
        <br />
        <Sample02 />
        <br />
        <Sample03 />
        <br />
        <hr />
        <h1>hooks</h1>
        <LessText />
        <br />
        <StepCounter />
        <br />
        <MyTeam />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <h1>fetch, events</h1>
        <Posts_static />
        <br />
        <Posts_API />
        <br />
        <Products />
        <br />
        <hr />
      </div>
    </>
  );
}

export default App;
