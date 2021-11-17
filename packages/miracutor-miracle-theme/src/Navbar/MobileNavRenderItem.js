import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const MobileNavRenderItem = (props) => {
  const { item } = props;

  let initialLevel = 0;

  const generateNestedMenu = (item, level) => {
    if (item.list.length === 0) {
      return (
        <RenderMenuItem
          key={"mobile-menu-item-" + item.name + item.list.length + item.link}
          item={item}
          level={level}
          top={level === 0 ? true : false}
        />
      );
    } else {
      return (
        <React.Fragment
          key={"mobile-menu-" + item.name + item.list.length + item.link}
        >
          <RenderMenuItem
            item={item}
            level={level}
            top={level === 0 ? true : false}
          />
          <Divider />
          {item.list.map((n) => {
            return generateNestedMenu(n, level + 1);
          })}
          <Divider />
        </React.Fragment>
      );
    }
  };

  return <>{generateNestedMenu(item, initialLevel)}</>;
};

const RenderMenuItem = (props) => {
  const { level, item, top } = props;
  return (
    <Link
      link={item.link}
      sx={{
        //color: (theme) => theme.palette.primary.contrastText,
        textDecoration: "none",
      }}
    >
      <MenuItem>
        <Typography
          variant={top ? "subtitle1" : "subtitle2"}
          sx={{ pl: level * 4 }}
        >
          {item.name}
        </Typography>
      </MenuItem>
    </Link>
  );
};

export default MobileNavRenderItem;
