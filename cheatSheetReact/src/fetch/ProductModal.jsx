import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductModal = ({
  activeProduct,
  setActiveProduct,
  setAddToCartProduct,
  handleClose,
}) => {
  //   console.log("modal", activeProduct);
  //   const { title, description } = activeProduct;

  const addToCart = () => {
    setAddToCartProduct(activeProduct);
    setActiveProduct(null);
  };

  return (
    <Modal show={activeProduct} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{activeProduct?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{activeProduct?.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          close
        </Button>
        <Button variant="primary" onClick={addToCart}>
          add to cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
