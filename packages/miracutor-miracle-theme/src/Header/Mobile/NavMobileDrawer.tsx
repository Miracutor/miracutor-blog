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
import MappableSet from "../../utils/MappableSet";

type NavMobileDrawerProps = {
  listItems: MappableSet<NavbarItem>;
};

const NavMobileDrawer = (props: NavMobileDrawerProps) => {
  const popupState = usePopupState({
    popupId: "navmobile-drawer",
    variant: "popover",
  });

  const renderItemsFromList = (nvItem: NavbarItem, level = 0) => {
    return (
      <NavMobileMenuItem
        key={`nav-mobile-menu-item-${nvItem.name}${nvItem.list.length()}${
          nvItem.link
        }`}
        name={nvItem.name}
        link={nvItem.link}
        level={level}
        onClick={popupState.close}
      >
        {nvItem.list.length() !== 0 &&
          nvItem.list.map((i) => renderItemsFromList(i, level + 1))}
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
        {props.listItems &&
          props.listItems.length() !== 0 &&
          props.listItems.map((i) => renderItemsFromList(i))}
      </Drawer>
    </Box>
  );
};

export default NavMobileDrawer;
