const Counter = ({ flavorInfo }) => {
  const { flavor, color, count } = flavorInfo;

  const counterDesign = {    
    fontSize: "1.5rem",
    background: "#252d3c",
    color: `${color}`,
    textAlign: "center",
  };
  return (
    <div style={counterDesign}>
      {flavor}{" "}{count}
    </div>
  );
};

export default Counter;
