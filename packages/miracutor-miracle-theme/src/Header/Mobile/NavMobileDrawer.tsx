import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import NavbarItem from "../NavbarItem";
import NavMobileMenuItem from "./NavMobileMenuItem";

type NavMobileDrawerProps = {
  listItems: Set<NavbarItem>;
};

const setToArray = (set: Set<NavbarItem>) => [...set];

const NavMobileDrawer = (props: NavMobileDrawerProps) => {
  const popupState = usePopupState({
    popupId: "navmobile-drawer",
    variant: "popover",
  });

  const renderItemsFromList = (nvItem: NavbarItem, level = 0) => {
    return (
      <NavMobileMenuItem
        key={`nav-mobile-menu-item-${nvItem.name}${nvItem.list.size}${nvItem.link}`}
        name={nvItem.name}
        link={nvItem.link}
        level={level}
        onClick={popupState.close}
      >
        {nvItem.list.size !== 0 &&
          setToArray(nvItem.list).map((i) => renderItemsFromList(i, level + 1))}
      </NavMobileMenuItem>
    );
  };

  const DrawerPropsMenu = bindMenu(popupState);
  delete DrawerPropsMenu.anchorEl;

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        {...bindTrigger(popupState)}
      >
        <MenuIcon />
        <Typography sx={{ ml: 1 }}>MENU</Typography>
      </IconButton>
      <Drawer variant="temporary" anchor="bottom" {...DrawerPropsMenu}>
        {props.listItems.size !== 0 &&
          setToArray(props.listItems).map((i) => renderItemsFromList(i))}
      </Drawer>
    </Box>
  );
};

export default NavMobileDrawer;
