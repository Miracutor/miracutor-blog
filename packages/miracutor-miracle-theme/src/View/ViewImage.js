import React from "react";
import { styled } from "@mui/material/styles";
import Img from "@frontity/components/image";

const ViewImage = ({ alt, src, srcSet, sizes }) => {
  return <Image alt={alt} src={src} srcSet={srcSet} sizes={sizes} />;
};

const Image = styled(Img)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
  height: auto;
  max-height: 500px;
`;

const WPBlockImg = styled("div")`
  margin: 0 0 1em 0;
  img {
    height: auto;
    max-width: 100%;
  }

  &:not(.is-style-rounded) img {
    border-radius: inherit;
  }

  &.aligncenter {
    text-align: center;
  }

  &.alignfull img,
  &.alignwide img {
    height: auto;
    width: 100%;
  }

  &.is-style-rounded img {
    border-radius: 9999px;
  }

  .alignleft,
  .alignright,
  .aligncenter {
    display: table;

    > figcaption {
      display: table-caption;
      caption-side: bottom;
    }
  }

  .alignleft {
    float: left;
    margin-left: 0;
    margin-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .alignright {
    float: right;
    margin-right: 0;
    margin-left: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .aligncenter {
    margin-left: auto;
    margin-right: auto;
  }

  figure {
    margin: 0;
  }
`;

export { ViewImage, WPBlockImg };
