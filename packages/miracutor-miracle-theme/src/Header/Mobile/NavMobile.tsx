import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavbarItem from "../NavbarItem";
import NavMobileDrawer from "./NavMobileDrawer";
import MappableSet from "../../utils/MappableSet";

type NavMobileProps = {
  listItems: MappableSet<NavbarItem>;
};

const NavMobile = (props: NavMobileProps) => {
  return (
    <AppBar position={"static"} sx={{ alignItems: "center" }} elevation={0}>
      <Toolbar variant={"dense"}>
        <NavMobileDrawer listItems={props.listItems} />
      </Toolbar>
    </AppBar>
  );
};

export default NavMobile;
