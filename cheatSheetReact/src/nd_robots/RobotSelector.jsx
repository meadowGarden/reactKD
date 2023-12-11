import "./robots.css";
import RobotCard from "./RobotCard";
import robots from "./listOfRobots";
import RobotSelectorHeading from "./RobotSelectorHeading";
import { useState } from "react";

const RobotSelector = () => {
  const [list, setList] = useState([...robots]);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const changeReservatioStatus = (robot) => {
    const updatedArr = list.map((robotIn) => {
      if (robotIn.id === robot?.id) {
        return { ...robotIn, reserved: (robotIn.reserved === true) ? false : true };
      }
      return robotIn;
    });
    setList([...updatedArr]);
  };

  const robotsToDisplay = list.map((robot) => (
    <RobotCard
      key={robot.id}
      robot={robot}
      reservation={changeReservatioStatus}
      isVisible={isVisible}
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
