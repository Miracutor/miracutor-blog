import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavbarItem from "../NavbarItem";
import FixedScroll from "./FixedScroll";
import NavDesktopMenu from "./NavDesktopMenu";

type NavDesktopProps = {
  spacing?: number;
  listItems: Set<NavbarItem>;
};

const NavDesktop = (props: NavDesktopProps) => {
  const list = [...props.listItems];
  return (
    <FixedScroll>
      <AppBar position={"static"} sx={{ alignItems: "center" }} elevation={0}>
        <Toolbar variant={"dense"}>
          {list.map((item) => (
            <NavDesktopMenu
              key={`navdesktopmenu-items-${item.name}-${item.link}-${item.list.size}`}
              item={item}
              spacing={props.spacing}
            />
          ))}
        </Toolbar>
      </AppBar>
    </FixedScroll>
  );
};

export default NavDesktop;
