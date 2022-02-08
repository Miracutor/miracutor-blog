import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

type NavMobileMenuItemProps = {
  link: string;
  level?: number;
  name: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  children?: React.ReactNode;
};

const NavMobileMenuItem = ({
  name,
  link,
  level = 0,
  children,
  onClick,
}: NavMobileMenuItemProps) => {
  return (
    <React.Fragment>
      <Link href={link} underline="none">
        <MenuItem onClick={onClick}>
          <Typography
            variant={level === 0 ? "subtitle1" : "subtitle2"}
            sx={{ pl: level * 4 }}
          >
            {name}
          </Typography>
        </MenuItem>
      </Link>
      {children}
    </React.Fragment>
  );
};

export default NavMobileMenuItem;
