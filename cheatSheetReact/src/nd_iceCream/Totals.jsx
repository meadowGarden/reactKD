const Totals = ({ countInTotal, sumInTotal }) => {
  const totalsDesign = {
    fontSize: "1.4rem",
    textAlign: "center",
    background: "#9eb6b8",
  };
  return (
    <div style={totalsDesign}>
      <p>{`total portions -> ${countInTotal}`}</p>
      <p>{`total sum -> ${sumInTotal}`}</p>
    </div>
  );
};

export default Totals;
