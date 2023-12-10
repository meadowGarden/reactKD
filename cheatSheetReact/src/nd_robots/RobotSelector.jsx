import "./robots.css";
import RobotCard from "./RobotCard";
import robots from "./listOfRobots";
import RobotSelectorHeading from "./RobotSelectorHeading";
import { useState } from "react";

const RobotSelector = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isReserved, setIsReserved] = useState(false);

  const makeReservation = (robot) => {
    setIsReserved(true);
  };

  const robotsToDisplay = robots.map((robot) => (
    <RobotCard
      key={robot.id}
      robot={robot}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      input={inputValue}
      makeReservation={makeReservation}
      isReserved={isReserved}
      setIsReserved={setIsReserved}
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
