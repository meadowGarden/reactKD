import { useEffect, useState } from "react";
import CartList from "./ItemList";
import "./itemCart.css";
import ItemCard from "./SingleProductCard";
import axios from "axios";

const ItemCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productArr, setProductArr] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProductArr(response.data.products);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }

  const handleCartListAdd = (addedProduct) => {
    if (cartList.find((product) => product.id === addedProduct.id)) {
      const updatedArr = cartList.map((productIn) => {
        if (productIn.id === addedProduct?.id) {
          return {
            id: productIn?.id,
            title: productIn?.title,
            sum: productIn.sum + addedProduct?.price,
          };
        } else {
          return {
            id: productIn?.id,
            title: productIn?.title,
            sum: productIn.sum,
          };
        }
      });

      console.log("updated", updatedArr);
      setCartList([...updatedArr]);
      return;
    } else {
      const product = {
        id: addedProduct?.id,
        title: addedProduct?.title,
        sum: addedProduct?.price,
      };

      setCartList([...cartList, product]);
      return;
    }
  };

  const itemsToDisplay = productArr.map((item) => {
    return (
      <ItemCard
        key={item.id}
        product={item}
        onButtonClick={handleCartListAdd}
      />
    );
  });

  const displayCartList = cartList.map((item) => {
    return <CartList key={item?.id} product={item} />;
  });

  return (
    <>
      <div className="cartContainer">
        <h3>cartlist</h3>
        <div>{displayCartList}</div>
        <div>
          <h3 className="cartSum">{`total sum -> ???`}</h3>
        </div>
      </div>

      <div className="mainContainer">{itemsToDisplay}</div>
    </>
  );
};

export default ItemCart;
