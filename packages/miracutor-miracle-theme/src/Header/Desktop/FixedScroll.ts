import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

type FixedScrollProps = {
  children: React.ReactElement;
};

const FixedScroll = ({ children }: FixedScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 180,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    position: trigger ? "fixed" : "static",
  });
};

export default FixedScroll;
