import "./card.css"

const PaymentInfo = ({ card }) => {
  const { number, expiry, cvc, name, focused } = card;

  return (
    <div className="paymentInfo">
      <p>{`card number: ${number}`}</p>
      <p>{`name: ${name}`}</p>
      <p>{`card expires: ${expiry}`}</p>
      <p>{`cvc: ${cvc}`}</p>
    </div>
  );
};

export default PaymentInfo;
