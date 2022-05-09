import Link from "@mui/material/Link";

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
