import React from "react";
import { loadable } from "frontity";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NavbarItem from "./NavbarItem";
import { MobileContext } from "../Context/MobileProvider";
import {
  LoadingHeaderDesktop,
  LoadingHeaderMobile,
} from "../Loading/LoadingHeader";

const NavDesktop = loadable(() => import("./Desktop/NavDesktop"));
const NavMobile = loadable(() => import("./Mobile/NavMobile"));

type HeaderProps = {
  title: string;
  tagline: string;
  listItems: Set<NavbarItem>;
  mobile?: boolean;
  userAgent?: string;
};
const Header = (props: HeaderProps) => {
  return (
    <MobileContext.Consumer>
     {mobileStatus => <Box flexGrow={1}>
        <AppBar position={"static"} elevation={0} sx={{ alignItems: "center" }}>
          <Toolbar>
            <Box textAlign={"center"} pt={2}>
              <Link color={"secondary.contrastText"} underline="none" href={"/"}>
                <Typography
                  variant={mobileStatus ? "h3" : "h1"}
                  component="h1"
                >
                  {props.title}
                </Typography>
              </Link>
              <Typography
                variant={mobileStatus ? "h6" : "h4"}
                component="h2"
              >
                {props.tagline}
              </Typography>
              <Divider
                variant={"middle"}
                color={"white"}
                sx={{ mt: 2, mb: 1, mx: "auto", width: "70vw" }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        {mobileStatus ? (
          <NavMobile
            listItems={props.listItems}
            fallback={<LoadingHeaderMobile />}
          />
        ) : (
          <NavDesktop
            listItems={props.listItems}
            fallback={<LoadingHeaderDesktop spacing={2} />}
          />
        )}
        <div id={"back-to-top-anchor"} />
      </Box>}
    </MobileContext.Consumer>
  );
};

export default React.memo(Header);
