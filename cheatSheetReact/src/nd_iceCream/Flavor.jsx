const Flavor = ({ flavorInfo, click }) => {
  const { flavor, color, fontColor } = flavorInfo;

  const flavorDesign = {
    background: `${color}`,
    color: `${fontColor}`,
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div onClick={() => click(flavorInfo)} style={flavorDesign}>
      <h3>{flavor}</h3>
    </div>
  );
};

export default Flavor;
