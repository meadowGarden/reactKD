import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SubmissionModal = ({post, messageInfo, isModalVisible, handleClose }) => {
  const { name, email} = messageInfo;
//   console.log("post", post);

  return (
    <Modal show={isModalVisible} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>success {post?.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        message to user: {name}, address: {email} has been sent
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          close
        </Button>
        {/* <Button variant="primary" onClick={addToCart}>
          add to cart
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default SubmissionModal;
