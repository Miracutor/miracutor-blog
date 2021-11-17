import React from "react";
import { loadable } from "frontity";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarCard from "./SidebarCard";

const Sidebar = (props) => {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <SidebarCard title={"Disclaimer"} bgColor={"grey.300"}>
        <Typography sx={{ mb: 1 }}>
          All the works compiled into EPUBs in this site are owned by their
          original author and companies.
        </Typography>
        <Typography>
          The translations are owned by the original translators.
        </Typography>
      </SidebarCard>
      {/* <SidebarCard>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "miracutor",
          }}
          options={{
            height: "400",
          }}
        />
      </SidebarCard> */}
      <SidebarCard title={"Social"}>
        <Link
          display="block"
          variant="body1"
          link={"https://www.twitter.com/miracutor"}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <TwitterIcon />
            <span>Twitter</span>
          </Stack>
        </Link>
        <Link
          display="block"
          variant="body1"
          link={"https://www.github.com/Miracutor"}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <span>Github</span>
          </Stack>
        </Link>
      </SidebarCard>
    </Grid>
  );
};

export default Sidebar;
