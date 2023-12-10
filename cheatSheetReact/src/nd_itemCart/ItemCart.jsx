import { useEffect, useState } from "react";
import CartList from "./ItemList";
import "./itemCart.css";
import ItemCard from "./SingleProductCard";
import axios from "axios";

const ItemCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productArr, setProductArr] = useState([]);
  const [cartList, setCartList] = useState([
    {
      id: "",
      title: "",
      sum: 0,
    },
  ]);

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

  const handleCartListAdd = (product) => {
    const updatedArr = cartList.map((productIn) => {
      if (productIn.id === product?.id) {
        return {
          ...productIn,
          id: product?.id,
          title: product?.title,
          sum: productIn.sum + product?.price,
        };
      } else {
        return {
          ...productIn,
          id: product?.id,
          title: product?.title,
          sum: product?.price,
        };
      }
    });
    setCartList([...updatedArr]);
  };
  console.log("list -> ", cartList);

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

// const handleCartListAdd = (product) => {
//   const updatedArr = cartList.map((productIn) => {
//     const isInList = productIn.id === product?.id;
//     if (isInList) {
//       return {
//         ...productIn,
//         id: product?.id,
//         title: product?.title,
//         sum: productIn.sum + product?.price,
//       };
//     } else if (!isInList) {
//       return {
//         ...productIn,
//         id: product?.id,
//         title: product?.title,
//         sum: product?.price,
//       };
//     }
//     return productIn;
//   });

//   setCartList([...updatedArr]);
// };
// console.log("list -> ", cartList);
