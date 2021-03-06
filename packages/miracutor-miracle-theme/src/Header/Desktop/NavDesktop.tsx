import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavbarItem from "../NavbarItem";
import FixedScroll from "./FixedScroll";
import NavDesktopMenu from "./NavDesktopMenu";
import MappableSet from "../../utils/MappableSet";

type NavDesktopProps = {
  spacing?: number;
  listItems: MappableSet<NavbarItem>;
};

const NavDesktop = (props: NavDesktopProps) => {
  return (
    <FixedScroll>
      <AppBar position={"static"} sx={{ alignItems: "center" }} elevation={0}>
        <Toolbar variant={"dense"}>
          {props.listItems.map((item: NavbarItem) => (
            <NavDesktopMenu
              key={`navdesktopmenu-items-${item.name}-${
                item.link
              }-${item.list.length()}`}
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
