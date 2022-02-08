import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CascadingMenu } from "./CascadingoverMenu";
import {
  usePopupState,
  bindHover,
  bindFocus,
} from "material-ui-popup-state/hooks";
import NavbarItem from "../NavbarItem";
import NavDesktopMenuItem from "./NavDesktopMenuItem";

type NavDesktopMenuProps = {
  spacing?: number;
  item: NavbarItem;
};

const NavDesktopMenu = ({ spacing = 2, item }: NavDesktopMenuProps) => {
  const popupState = usePopupState({
    popupId: `navdesktop-menu-${item.name}-${item.link}`,
    variant: "popover",
  });

  const renderItemsFromList = (nvItem: NavbarItem) => {
    return (
      <NavDesktopMenuItem
        key={
          "nav-desktop-menu-item-" +
          nvItem.name +
          nvItem.link +
          nvItem.list.length
        }
        name={nvItem.name}
        link={nvItem.link}
        length={nvItem.list.length !== 0 && nvItem.link.length}
        mode={nvItem.list.length !== 0 ? "MENU" : "LINK"}
      >
        {nvItem.list.length !== 0 &&
          nvItem.list.map((i) => renderItemsFromList(i))}
      </NavDesktopMenuItem>
    );
  };

  return (
    <Box marginX={spacing}>
      <Link
        href={item.link}
        color={"secondary.contrastText"}
        underline={"none"}
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
      >
        <Typography variant="h6">{item.name}</Typography>
      </Link>
      {item.list.length !== 0 && (
        <CascadingMenu
          popupState={popupState}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {item.list.map((i) => renderItemsFromList(i))}
        </CascadingMenu>
      )}
    </Box>
  );
};

export default NavDesktopMenu;
