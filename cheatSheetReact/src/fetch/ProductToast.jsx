import Toast from "react-bootstrap/Toast";

const ProductToast = ({ activeProduct, setAddToCartProduct }) => {
  return (
    <Toast onClose={() => setAddToCartProduct(null)}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>added to cart</Toast.Body>
    </Toast>
  );
};

export default ProductToast;
