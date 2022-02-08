import React from "react";
import Link from "@mui/material/Link";
import { CascadingMenuItem, CascadingSubmenu } from "./CascadingoverMenu";

type NavDesktopMenuItemProps = {
  name: string;
  link: string;
  length?: number;
  mode?: "MENU" | "LINK";
  children?: React.ReactNode;
};

const NavDesktopMenuItem = ({
  name,
  link,
  length,
  mode = "LINK",
  children,
}: NavDesktopMenuItemProps) => {
  if (mode === "MENU") {
    return (
      <CascadingSubmenu
        popupId={`navdesktop-submenu-${name + link + length}`}
        title={name}
        link={link}
      >
        {children}
      </CascadingSubmenu>
    );
  } else {
    if (children) {
      throw new Error(
        "No children when rendering NavDesktopMenuItem in LINK mode."
      );
    }
    return (
      <Link href={link} color={"primary.contrastText"} underline={"none"}>
        <CascadingMenuItem>{name}</CascadingMenuItem>
      </Link>
    );
  }
};

export default NavDesktopMenuItem;
