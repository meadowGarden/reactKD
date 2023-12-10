import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = ({ product, onButtonClick }) => {
  const { id, name, price, image, category } = product;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button onClick={() => onButtonClick(product)}>add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
