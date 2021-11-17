import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const FixedScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 180,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    position: trigger ? "fixed" : "static",
  });
};

FixedScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FixedScroll;
