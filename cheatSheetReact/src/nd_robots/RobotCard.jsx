import { useState } from "react";
import "./robots.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RobotCard = ({
  robot,
  input,
  makeReservation,
  isReserved,
  setIsReserved,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { name, username, email, avatar, reserved } = robot;

  const handleVisibility = () => {
    console.log("name of robot", name);
    console.log(name.includes(input));

    // if (name.includes(input)) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  };
  handleVisibility();

  return (
    <>
      {isVisible && (
        <Card
          className={isReserved ? "robotCardReserved" : "robotCard"}
          style={{ width: "18rem" }}
        >
          <Card.Img className="avatarStyle" variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Button
              onClick={() => makeReservation(robot)}
              className="reserveButton"
              variant="primary"
            >
              {isReserved ? "reserved" : "reserve"}
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RobotCard;
