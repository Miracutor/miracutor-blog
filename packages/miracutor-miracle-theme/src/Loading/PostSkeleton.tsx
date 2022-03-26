import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

const PostSkeleton = ({
  isPost = false,
  mobileStatus,
}: {
  isPost?: boolean;
  mobileStatus: boolean;
}) => (
  <Card variant="outlined" sx={{ py: 3, px: 1 }}>
    <CardContent>
      <Skeleton width="100%">
        <Typography
          variant={mobileStatus ? "h5" : "h4"}
          textAlign={"center"}
          gutterBottom
        >
          [Example] So, why I still dream this?
        </Typography>
      </Skeleton>
      {isPost && (
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
      )}
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
      {isPost && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </CardContent>
  </Card>
);

export default PostSkeleton;
