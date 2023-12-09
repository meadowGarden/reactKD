import { useState } from "react";
import Flavor from "./Flavor";
import initialData from "./initialData";
import Counter from "./Counter";
import Totals from "./Totals";

const IceCreamStand = () => {
  const [productionArr, setProductionArr] = useState([...initialData]);

  const clickFlavor = (flavor) => {
    // console.log("flavor in -> ", flavor?.flavor);       //kada tu matai, kada ne?!!
    const updatedArr = productionArr.map((flavorIn) => {
      if (flavorIn.flavor === flavor?.flavor) {
        return { ...flavorIn, count: flavorIn.count + 1 };
      }
      return flavorIn;
    });
    setProductionArr([...updatedArr]);
  };

  const { totalCount, totalSum } = productionArr.reduce(
    (flavors, singleFlavor) => {
      const { count, price } = singleFlavor;
      flavors.totalCount += count;
      flavors.totalSum += count * price;
      return flavors;
    },
    { totalCount: 0, totalSum: 0 }
  );

  const flavorsToDisplay = initialData.map((flavor) => (
    <Flavor key={flavor.key} flavorInfo={flavor} click={clickFlavor} />
  ));

  const flavorCounter = productionArr.map((flavor) => (
    <Counter key={flavor.key} flavorInfo={flavor} />
  ));

  const containerDesign = {
    width: "80%",
  };

  const flavoursDesign = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr ",
  };

  const bottomDesign = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr ",
  };

  const counterDesign = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
  };

  return (
    <>
      <div style={containerDesign}>
        <div style={flavoursDesign}>{flavorsToDisplay}</div>
        <div style={bottomDesign}>
          <div style={counterDesign}>{flavorCounter}</div>
          <Totals countInTotal={totalCount} sumInTotal={totalSum} />
        </div>
      </div>
    </>
  );
};

export default IceCreamStand;
