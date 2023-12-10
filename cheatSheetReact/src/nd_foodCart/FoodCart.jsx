import { useState } from "react";
import CartList from "./CartList";
import "./foodCart.css";
import ItemCard from "./ItemCard";
import foodArr from "./listOfFoodProducts";

const FoodCart = () => {
  const [cartList, setCartList] = useState([]);
  const [sum, setSum] = useState(0);

  const handleCartListAdd = (product) => {
    if (cartList.includes(product)) {
      alert("already in the cart");
      return;
    }
    setCartList([...cartList, product]);
    setSum(sum + product?.price);
  };

  const itemsToDisplay = foodArr.map((item) => {
    return (
      <ItemCard
        key={item.id}
        product={item}
        onButtonClick={handleCartListAdd}
      />
    );
  });

  const addToCart = cartList.map((item) => {
    return <CartList key={item.id} product={item} />;
  });

  return (
    <>
      <div className="cartContainer">
        <h3>cartlist</h3>
        <div>{addToCart}</div>
        <div>
          <h3>{`total sum -> ${sum}`}</h3>
        </div>
      </div>
      <div className="itemsContainer">{itemsToDisplay}</div>
    </>
  );
};

export default FoodCart;
