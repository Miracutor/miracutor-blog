import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  CascadingMenu,
  CascadingMenuItem,
  CascadingSubmenu,
} from "./CascadingHoverMenus";
import {
  usePopupState,
  bindHover,
  bindFocus,
} from "material-ui-popup-state/hooks";
import Box from "@mui/system/Box";

const NavRenderItem = (props) => {
  const popupState = usePopupState({
    popupId: `itemMenu-${props.children}-${props.link}`,
    variant: "popover",
  });
  const generateMenuTop = (popupState, item) => {
    return (
      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {item.list.map((n) => {
          return generateNestedMenu(n);
        })}
      </CascadingMenu>
    );
  };

  const generateNestedMenu = (item) => {
    if (item.list.length === 0) {
      return (
        <Link
          key={item.name + item.list.length + item.link}
          link={item.link}
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            textDecoration: "none",
          }}
        >
          <CascadingMenuItem>{item.name}</CascadingMenuItem>
        </Link>
      );
    } else {
      return (
        <CascadingSubmenu
          key={item.name + item.list.length + item.link}
          popupId={`itemMenu-submenu-${item.name + item.link}`}
          title={item.name}
          link={item.link}
          sx={{
            color: (theme) => theme.palette.primary.contrastText,
            textDecoration: "none",
          }}
        >
          {item.list.map((n) => {
            return generateNestedMenu(n);
          })}
        </CascadingSubmenu>
      );
    }
  };

  return (
    <Box marginX={props.spacing}>
      <Link
        link={props.link}
        sx={{
          color: (theme) => theme.palette.primary.contrastText,
          textDecoration: "none",
        }}
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
      >
        <Typography variant="h6">{props.children}</Typography>
      </Link>
      {props.item.list.length !== 0 && generateMenuTop(popupState, props.item)}
    </Box>
  );
};

export default NavRenderItem;
