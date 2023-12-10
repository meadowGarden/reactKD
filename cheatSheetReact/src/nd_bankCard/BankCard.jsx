import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import BankCardForm from "./BankCardForm";
import PaymentInfo from "./PaymentInfo";
import "./card.css";

const BankCard = () => {
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focused: "",
  });
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const buttonClick = () => {
    setIsPaymentComplete(true);
    console.log(isPaymentComplete);
  };

  return (
    <div>
      {card.number ? (
        <h1 className="title">{card.name} credit card</h1>
      ) : (
        <h1 className="title">card template</h1>
      )}
      <div className="cardContainer">
        <div>
          <Cards
            number={card.number}
            expiry={card.expiry}
            cvc={card.cvc}
            name={card.name}
            focused={card.focused}
          />
        </div>
        <div>
          <BankCardForm card={card} setCard={setCard} click={buttonClick} />
        </div>
      </div>
      {isPaymentComplete && <PaymentInfo card={card} />}
    </div>
  );
};

export default BankCard;
