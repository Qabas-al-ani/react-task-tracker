import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
