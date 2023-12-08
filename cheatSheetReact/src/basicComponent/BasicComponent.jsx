import PropTypes from "prop-types";

const BasicComponent = ({ varSample }) => {
  return (
    <>
      <h1>{varSample}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        placeat doloribus distinctio nam. Odit, porro facere. Sint, voluptatibus
        deleniti aliquid nisi labore vel expedita deserunt voluptatum. Minima
        officiis voluptates quibusdam?
      </p>
    </>
  );
};

BasicComponent.propTypes = {
  varSample: PropTypes.string.isRequired,
};

export default BasicComponent;

// npm i --save-dev --save-exact prettier
