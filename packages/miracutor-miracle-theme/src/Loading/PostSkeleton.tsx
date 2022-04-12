import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";

const PostSkeleton = ({
  isPost = false,
  isArchive = false,
}: {
  isPost?: boolean;
  isArchive?: boolean;
}) => (
  <Card variant="outlined" sx={{ py: 3, px: 1 }}>
    <CardContent>
      <Skeleton variant="text" width="100%" height={50} />
      {(isArchive || isPost) && (
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
          mb={3}
          mt={2}
        >
          <Skeleton variant="rectangular" width={25} height={25} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="rectangular" width={25} height={25} />
          <Skeleton variant="text" width={100} />
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
            <Skeleton variant="rectangular" width={25} height={25} />
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={50} />
            <Skeleton variant="text" width={50} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Skeleton variant="rectangular" width={25} height={25} />
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={50} />
            <Skeleton variant="text" width={50} />
          </Stack>
        </React.Fragment>
      )}
    </CardContent>
  </Card>
);

export default React.memo(PostSkeleton);
