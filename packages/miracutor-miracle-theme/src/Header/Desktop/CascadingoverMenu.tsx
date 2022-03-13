import React from "react";
import { MenuProps } from "@mui/material/Menu";
import Link from "@mui/material/Link";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Icon from '@mui/material/Icon';
//import ChevronRight from "@mui/icons-material/ChevronRight";
import { PopupState } from "material-ui-popup-state/core";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from "material-ui-popup-state/hooks";

// Types -start

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
type HoverMenuProps = Override<MenuProps, { open?: boolean }>;

type CascadingMenuItemProps = MenuItemProps & { onClick?: Function };
type CascadingSubmenuProps = HoverMenuProps & {
  title: string;
  popupId: string;
  link: string;
};
type CascadingMenuProps = HoverMenuProps & {
  popupState: PopupState;
};

// Types -end

const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
});

const CascadingMenuItem = ({ onClick, ...props }: CascadingMenuItemProps) => {
  const { rootPopupState } = React.useContext(CascadingContext);
  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");
  const handleClick = React.useCallback(
    (event) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick]
  );

  return <MenuItem {...props} onClick={handleClick} />;
};

const CascadingSubmenu = ({
  title,
  popupId,
  ...props
}: CascadingSubmenuProps) => {
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });
  return (
    <>
      <Link href={props.link} color="secondary.contrastText" underline="none">
        <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
          <NavMenuTitle>{title}</NavMenuTitle>
          {/* <NavMenuArrow /> */}
          <Icon>chevron_right</Icon>
        </MenuItem>
      </Link>
      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: "CascadingMenu-submenu" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </>
  );
};

const CascadingMenu = ({ popupState, ...props }: CascadingMenuProps) => {
  const { rootPopupState } = React.useContext(CascadingContext);
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState]
  );

  return (
    <CascadingContext.Provider value={context}>
      <NavHoverMenu
        classes={{
          ...props.classes,
          paper: "CascadingMenu-menu",
        }}
        {...props}
        {...bindMenu(popupState)}
      />
    </CascadingContext.Provider>
  );
};

const NavHoverMenu = styled(HoverMenu)(({ theme }) => ({
  "& .CascadingMenu-menu": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  "& .CascadingMenu-submenu": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
}));

const NavMenuTitle = styled("span")`
  flex-grow: 1;
`;

const NavMenuArrow = styled(Icon)(({ theme }) => ({
  marginRight: theme.spacing(-1),
}));

export { CascadingMenu, CascadingSubmenu, CascadingMenuItem };
