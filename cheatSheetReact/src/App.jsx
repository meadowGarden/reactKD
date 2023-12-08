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
      </div>
    </>
  );
}

export default App;
