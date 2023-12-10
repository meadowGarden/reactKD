import { useState } from "react";
import "./card.css";

const BankCardForm = ({ card, setCard, click }) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCard((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${card.number}`);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <input
        required
        className="formElement"
        minLength={16}
        maxLength={16}
        type="text"
        name="number"
        placeholder="card number"
        value={card.number}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        required
        className="formElement"
        minLength={4}
        maxLength={4}
        name="expiry"
        value={card.expiry}
        placeholder="expiration date MM/YY"
        type="text"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <div className="innerFormContainer">
        <input
          required
          className="formElement"
          minLength={3}
          maxLength={3}
          name="cvc"
          value={card.cvc}
          placeholder="***"
          type="text"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          required
          className="formElement"
          minLength={2}
          maxLength={20}
          name="name"
          value={card.name}
          placeholder="first name, last name"
          type="text"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </div>
      <button onClick={() => click()} className="paymentButton">
        pay
      </button>
    </form>
  );
};

export default BankCardForm;
