import GroupComponent from "./group-component";
import PropTypes from "prop-types";

const FixedMenu = ({ className = "" }) => {
  return (
      <GroupComponent />
  );
};

FixedMenu.propTypes = {
  className: PropTypes.string,
};

export default FixedMenu;
