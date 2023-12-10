const CartList = ({ product }) => {
  const {id, name } = product;

  return (
    <li key={id}>{name}</li>
  );
};

export default CartList;
