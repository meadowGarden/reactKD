import "./robots.css";
import RobotCard from "./RobotCard";
import robots from "./listOfRobots";
import RobotSelectorHeading from "./RobotSelectorHeading";
import { useState } from "react";

const RobotSelector = () => {
  const [list, setList] = useState([...robots]);
  const [inputValue, setInputValue] = useState(undefined);

  const changeReservatioStatus = (robot) => {
    const updatedArr = list.map((robotIn) => {
      if (robotIn.id === robot?.id) {
        return {
          ...robotIn,
          reserved: robotIn.reserved === true ? false : true,
        };
      }
      return robotIn;
    });
    setList([...updatedArr]);
  };

  // console.log("input Value", inputValue);

  const filteredValue = list.filter((robot) =>
    robot.name.toLowerCase().includes(inputValue?.toLowerCase())
  );

  // console.log();

  const listToShow = inputValue ? filteredValue : list;

  // console.log(listToShow);

  const robotsToDisplay = listToShow.map((robot) => (
    <RobotCard
      key={robot.id}
      robot={robot}
      reservation={changeReservatioStatus}
    />
  ));

  return (
    <div className="page">
      <RobotSelectorHeading setInput={setInputValue} />
      <div className="robotCardsContainer">{robotsToDisplay}</div>
    </div>
  );
};

export default RobotSelector;
