import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product, click }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  return (
    // <div>
    //   <img style={{ width: "100%" }} src={images[0]} alt={id} />
    //   <h1>{title}</h1>
    //   <p>{description}</p>
    //   <p>{price}</p>
    // </div>

    <Card>
      {/* <Card style={{ width: '18rem' }}> */}
      <Card.Img style={{ width: "100%" }} variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={() => click(product)} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
