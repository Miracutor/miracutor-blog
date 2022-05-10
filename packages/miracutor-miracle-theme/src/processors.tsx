import Link from "@mui/material/Link";
import Image from "./Image";

export const muiLink = {
  priority: 10,
  name: "muiLink",
  test: ({ node }) =>
    node.component === "a" &&
    node.props?.href &&
    !node.props?.href?.startsWith("#"),
  processor: ({ node }) => {
    node.component = Link;
    return node;
  },
};

export const image = {
  name: "image",
  test: ({ node }) => node.component === "img",
  processor: ({ node }) => {
    if (node.parent?.component === "noscript") return null;

    if (node.props["data-src"]) {
      node.props.src = node.props["data-src"];
    }

    if (node.props["data-srcset"]) {
      node.props.srcSet = node.props["data-srcset"];
    }

    node.component = Image;

    return node;
  },
};
