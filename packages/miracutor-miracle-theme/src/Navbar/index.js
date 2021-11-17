import React, { useState, useEffect } from "react";
import { loadable } from "frontity";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
//import FixedScroll from "./FixedScroll";
//import MobileDrawer from "./MobileDrawer";
//import NavRenderItem from "./NavRenderItem";

const FixedScroll = loadable(() => import("./FixedScroll"));
const MobileDrawer = loadable(() => import("./MobileDrawer"));
const NavRenderItem = loadable(() => import("./NavRenderItem"));

const Navbar = (props) => {
  const [state, setState] = useState({ mobileView: false, list: [] });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const spacing = props.spacing || 2;

  const { mobileView, list } = state;

  const addItem = (value) => {
    list.push(value);
    setState((prevState) => ({ ...prevState, list: [...list] }));
  };

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        addItem: addItem,
      });
    } else {
      return child;
    }
  });

  const CustomAppBar = (props) => {
    if (mobileView) {
      return (
        <React.Fragment>
          <AppBar {...props} />
        </React.Fragment>
      );
    } else {
      return (
        <FixedScroll>
          <AppBar {...props} />
        </FixedScroll>
      );
    }
  };

  return (
    <React.Fragment>
      {childrenWithProps}
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position={"static"} elevation={0} sx={{ alignItems: "center" }}>
          <Toolbar>
            <Box textAlign={"center"} pt={2}>
              <Typography variant={mobileView ? "h3" : "h1"} component="div">
                <Link
                  color={"secondary.contrastText"}
                  sx={{ textDecoration: "none" }}
                  link={"/"}
                >
                  {props.title}
                </Link>
              </Typography>
              <Typography variant={mobileView ? "h6" : "h4"} component="div">
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
        <CustomAppBar
          position={"static"}
          sx={{ alignItems: "center" }}
          elevation={0}
        >
          <Toolbar variant={"dense"}>
            {mobileView ? (
              <MobileDrawer items={list} />
            ) : (
              list.map((l) => {
                return (
                  <NavRenderItem
                    key={l.name + "-nav-render-item"}
                    spacing={spacing}
                    link={l.link}
                    item={l}
                  >
                    {l.name}
                  </NavRenderItem>
                );
              })
            )}
          </Toolbar>
        </CustomAppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
