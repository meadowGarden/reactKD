import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import ProductModal from "./ProductModal";
import ProductToast from "./ProductToast";

const Products = () => {
  const [productsArr, setProductsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState();
  const [addToCartProduct, setAddToCartProduct] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response.data);
        setProductsArr(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleProductButtonClick = (product) => {
    setActiveProduct(product);
  };

  const productsToDisplay = productsArr.map((product) => (
    <Product
      key={product.id}
      product={product}
      click={handleProductButtonClick}
    />
  ));

  if (isLoading) {
    return <>data is loading, please wait...</>;
  }

  const handleClose = () => {
    setActiveProduct(null);
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    textAlign: "center",
    gap: "1rem",
    boxSizing: "borderBox",
  };

  //   console.log("active product", activeProduct);

  return (
    <>
      {addToCartProduct && (
        <ProductToast
          activeProduct={activeProduct}
          setAddToCartProduct={setAddToCartProduct}
        />
      )}
      <ProductModal
        setAddToCartProduct={setAddToCartProduct}
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
        handleClose={handleClose}
      />
      <div style={gridStyle}>{productsToDisplay}</div>
    </>
  );
};

export default Products;
