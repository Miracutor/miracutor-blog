import React from "react";
import { createTheme } from "@mui/material/styles";
import Link from "@frontity/components/link";
import { LinkProps } from "@frontity/components/link/types";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";

const FrontityLink = React.forwardRef<
  any,
  Omit<LinkProps, "link"> & { href: LinkProps["link"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <Link link={href} {...other} />;
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: FrontityLink,
        color: "secondary",
      } as MuiLinkProps,
    },
  },
  palette: {
    primary: {
      light: "#7c43bd",
      main: "#4a148c",
      dark: "#12005e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff5c8d",
      main: "#d81b60",
      dark: "#a00037",
      contrastText: "#ffffff",
    },
    background: {
      default: "#4a148c",
    },
  },
});

export default theme;
