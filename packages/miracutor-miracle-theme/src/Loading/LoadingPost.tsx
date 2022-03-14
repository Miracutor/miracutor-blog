import React from "react";
import { connect } from "frontity";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCustomSsrMatchMedia } from "../utils";

const LoadingPost = ({ state }) => {
  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  return (
    <Container sx={{ px: 0 }}>
      <Card variant="outlined" sx={{ py: 3, px: 1 }}>
        <CardContent>
          <Skeleton width="100%">
            <Typography
              variant={fetchMobileStatus() ? "h5" : "h4"}
              textAlign={"center"}
              gutterBottom
            >
              [Example] So, why I still dream this?
            </Typography>
          </Skeleton>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="center"
            mb={3}
            mt={2}
          >
            <Skeleton>
              <Icon />
            </Skeleton>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
            <Skeleton>
              <Icon />
            </Skeleton>
            <Skeleton>
              <Typography>29 Febuary 2020</Typography>
            </Skeleton>
          </Stack>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="75%" />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="85%" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="55%" />
          <Divider variant={"middle"} sx={{ mt: 8, mb: 2, color: "gray" }} />
          <Stack direction="row" spacing={1} mb={1}>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
            <Skeleton>
              <Typography>USER</Typography>
            </Skeleton>
          </Stack>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ p: 3, mt: 2, bgcolor: "grey.300" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Skeleton>
              <div className="wp-block-image is-style-rounded">
                <figure className="aligncenter">
                  <img />
                </figure>
              </div>
            </Skeleton>
          </Grid>
          <Grid item xs={12} md={8}>
            <Skeleton>
              <Typography sx={{ mb: 2 }}>
                <b>Author: USER</b>
              </Typography>
            </Skeleton>
            <Skeleton>
              <Typography>USER is the default user of the post.</Typography>
            </Skeleton>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default connect(LoadingPost);