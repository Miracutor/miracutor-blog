import React from "react";
import { connect, useConnect } from "frontity";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCustomSsrMatchMedia } from "../utils";
import { usePostSkeleton } from "./usePostSkeleton";
import { usePostSkeletonExtras } from "./usePostSkeletonExtras";

type LoadingProps = {
  when?: boolean;
  type: "POST" | "PAGE" | "ARCHIVE" | "ARCHIVEPOST";
};

const Loading = ({ type = "POST" }: LoadingProps) => {
  const { state } = useConnect();
  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  const PostSkeleton = usePostSkeleton(fetchMobileStatus());

  const PostSkeletonExtras = usePostSkeletonExtras();

  if (type === "ARCHIVEPOST") {
    return (
      <Box sx={{ mb: 5 }}>
        <PostSkeleton />
      </Box>
    );
  } else {
    return (
      <Container sx={{ px: 0 }}>
        {type === "POST" && (
          <React.Fragment>
            <PostSkeleton isPost />
            <PostSkeletonExtras />
          </React.Fragment>
        )}
        {type === "PAGE" && <PostSkeleton />}
        {type === "ARCHIVE" && (
          <Stack direction="column" spacing={5}>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </Stack>
        )}
      </Container>
    );
  }
};

export default connect(Loading);
