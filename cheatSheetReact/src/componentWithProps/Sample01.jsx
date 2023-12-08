import PropTypes from "prop-types";

const Sample01 = ({ varSample }) => {
  return (
    <>
      <h3>{varSample}, from props</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </>
  );
};

Sample01.propTypes = {
  varSample: PropTypes.string.isRequired,
};

export default Sample01;
