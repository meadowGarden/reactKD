import PropTypes from "prop-types";

const Sample02_1 = ({ person }) => {
  const { firstName, lastName, height } = person;
  return (
    <>
      <h3>sample title, from child component</h3>
      <p>sample text, from child component</p>
      <p>{firstName}, from child component</p>
      <p>{lastName}, from child component</p>
      <p>{height}, from child component</p>
    </>
  );
};

const Sample02 = () => {
  const person = {
    firstName: "jane",
    lastName: "doe",
    height: 170,
  };

  return (
    <>
      <Sample02_1 person={person} />
      <p>text from parent component</p>
    </>
  );
};

Sample02_1.propTypes = {
  //   person: PropTypes.string.isRequired,
  //   person: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

export default Sample02;
