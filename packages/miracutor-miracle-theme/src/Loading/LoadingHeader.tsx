import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import FixedScroll from "../Header/Desktop/FixedScroll";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
import Icon from "@mui/material/Icon";

const LoadingHeaderDesktopItem = ({ spacing }: { spacing: number }) => (
  <Box marginX={spacing}>
    <Skeleton sx={{ bgcolor: "grey.300" }}>
      <Typography variant="h6">Homela</Typography>
    </Skeleton>
  </Box>
);

const LoadingHeaderDesktop = ({ spacing = 2 }: { spacing: number }) => {
  return (
    <FixedScroll>
      <AppBar position={"static"} sx={{ alignItems: "center" }} elevation={0}>
        <Toolbar variant={"dense"}>
          <LoadingHeaderDesktopItem spacing={spacing} />
          <LoadingHeaderDesktopItem spacing={spacing} />
          <LoadingHeaderDesktopItem spacing={spacing} />
          <LoadingHeaderDesktopItem spacing={spacing} />
          <LoadingHeaderDesktopItem spacing={spacing} />
          <LoadingHeaderDesktopItem spacing={spacing} />
        </Toolbar>
      </AppBar>
    </FixedScroll>
  );
};

const LoadingHeaderMobile = () => {
  return (
    <AppBar position={"static"} sx={{ alignItems: "center" }} elevation={0}>
      <Toolbar variant={"dense"}>
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <Icon>menu</Icon>
            <Typography sx={{ ml: 1 }}>LOADING</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { LoadingHeaderDesktop, LoadingHeaderMobile };
