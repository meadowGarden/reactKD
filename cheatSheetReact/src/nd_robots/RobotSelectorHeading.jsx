import "./robots.css";

const RobotSelectorHeading = ({setInput }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
    // console.log("value in heading", event.target.value);
  };

  return (
    <>
      <h1 className="headerTitleStyle">robot friends</h1>
      <div className="searchStripStyle">
        <form>
          <input
            placeholder="search for robots"
            className="searchFieldStyle"
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default RobotSelectorHeading;
