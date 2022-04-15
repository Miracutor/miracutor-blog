import React from "react";
import Stack from "@mui/material/Stack";
import PostSkeleton from "./PostSkeleton";

const LoadingArchive = () => {
  return (
    <Stack direction="column" spacing={5}>
      <PostSkeleton isArchive />
      <PostSkeleton isArchive />
      <PostSkeleton isArchive />
      <PostSkeleton isArchive />
      <PostSkeleton isArchive />
    </Stack>
  );
};

export default React.memo(LoadingArchive);
