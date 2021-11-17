import * as React from "react";
import { makeStyles } from "@mui/styles";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from "material-ui-popup-state/hooks";

const useCascadingMenuStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  submenu: {
    marginTop: theme.spacing(-1),
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
}));

const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
});

function CascadingMenuItem({ onClick, ...props }) {
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
}

function CascadingSubmenu({ title, popupId, ...props }) {
  const classes = useCascadingMenuStyles();
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });
  return (
    <React.Fragment>
      <Link link={props.link} sx={props.sx}>
        <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
          <span className={classes.title}>{title}</span>
          <ChevronRight className={classes.moreArrow} />
        </MenuItem>
      </Link>
      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: classes.submenu }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </React.Fragment>
  );
}

function CascadingMenu({ popupState, ...props }) {
  const classes = useCascadingMenuStyles();
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
      <HoverMenu
        classes={{ ...props.classes, paper: classes.menu }}
        {...props}
        {...bindMenu(popupState)}
      />
    </CascadingContext.Provider>
  );
}

export { CascadingMenu, CascadingSubmenu, CascadingMenuItem };
