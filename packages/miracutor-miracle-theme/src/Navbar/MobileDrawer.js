import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import MobileNavRenderItem from "./MobileNavRenderItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/system/Box";

const MobileDrawer = (props) => {
  const [state, setState] = useState({ drawerOpen: false });

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  return (
    <React.Fragment>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
        <Typography sx={{ ml: 1 }}>MENU</Typography>
      </IconButton>

      <Drawer
        variant="temporary"
        anchor="bottom"
        open={state.drawerOpen}
        onClose={handleDrawerClose}
        onClick={handleDrawerClose}
      >
        <Box marginX={"auto"}>
          <IconButton onClick={handleDrawerClose}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
        <Divider />
        {props.items.map((item) => {
          return (
            <MobileNavRenderItem
              key={
                "mobile-nav-render-item-" +
                item.name +
                item.link +
                item.list.length
              }
              item={item}
            />
          );
        })}
      </Drawer>
    </React.Fragment>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default MobileDrawer;
