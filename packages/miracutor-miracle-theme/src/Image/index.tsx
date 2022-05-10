import React from "react";
import Img, { ImageProps } from "./mui-image";

const Image = ({ className, ...props }: ImageProps) => (
  <Img
    className={"frontity-lazy-image".concat(className ? ` ${className}` : "")}
    loading="lazy"
    {...props}
  />
);

export default Image;
