import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleProductCard = ({ product, onButtonClick }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;
  

  return (
    <div className="singleItemContainer">
      <Card className="card">
        <Card.Img className="pic" variant="top" src={images[0]} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button
            className="buttonToCart"
            onClick={() => onButtonClick(product)}
          >
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProductCard;
