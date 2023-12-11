import { useState } from "react";
import "./robots.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RobotCard = ({ robot, reservation, isVisible }) => {
  const { name, username, email, avatar, reserved } = robot;

  return (
    <>
      {isVisible && (
        <Card
          className={reserved ? "robotCardReserved" : "robotCard"}
          style={{ width: "18rem" }}
        >
          <Card.Img className="avatarStyle" variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Button
              onClick={() => reservation(robot)}
              className={reserved ? "reserveButtonReserved" : "reserveButton"}
              variant="primary"
            >
              {reserved ? "reserved" : "reserve"}
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RobotCard;
