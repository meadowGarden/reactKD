import { useState } from "react";

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  //   const changeStepCount = () => {        //normaliai neatnaujins
  //     setStepCount(stepCount + 1);
  //   };

  const changeStepCountByOne = () => {
    setStepCount((prevState) => prevState + 1);
  };

  const changeStepCountByFive = () => {
    setStepCount((prevState) => prevState + 5);
  };

  return (
    <>
      <div>{stepCount}</div>
      <div>
        <button onClick={changeStepCountByOne}>add single step</button>
      </div>
      <div>
        <button
          //   onClick={() => {
          //     changeStepCount();
          //     changeStepCount();
          //     changeStepCount();
          //     changeStepCount();
          //     changeStepCount();
          //   }}
          onClick={changeStepCountByFive}
        >
          add five step
        </button>
      </div>
    </>
  );
};

export default StepCounter;
