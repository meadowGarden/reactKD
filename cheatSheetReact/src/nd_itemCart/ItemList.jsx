const ItemList = ({ product }) => {
  const { id, title, sum } = product;

  return <li key={id}>{title}{" - "}{sum}</li>;
};

export default ItemList;
