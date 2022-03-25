import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export function usePostSkeletonExtras() {
  return () => (
    <React.Fragment>
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
    </React.Fragment>
  );
}
