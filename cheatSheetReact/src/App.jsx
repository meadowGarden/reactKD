import BasicComponent from "./basicComponent/BasicComponent";
import Sample01 from "./componentWithProps/Sample01";
import Sample02 from "./componentWithProps/Sample02";
import Sample03 from "./componentWithProps/Sample03";

function App() {
  return (
    <>
      <div>
        <h1>basic component</h1>
        <BasicComponent />
        <h1>components with a flavour</h1>
        <Sample01 varSample="sample of variable" />
        <Sample02 />
        <Sample03 />
      </div>
    </>
  );
}

export default App;
