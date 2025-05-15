import React, { forwardRef } from "react";
import Slide from "@mui/material/Slide";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Transition;
