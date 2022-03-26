import React from "react";
import { connect, useConnect } from "frontity";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCustomSsrMatchMedia } from "../utils";
import PostSkeleton from "./PostSkeleton";
import PostSkeletonExtras from "./PostSkeletonExtras";

type LoadingProps = {
  when?: boolean;
  type: "POST" | "PAGE" | "ARCHIVE" | "ARCHIVEPOST";
};

const Loading = ({ type = "POST" }: LoadingProps) => {
  const { state } = useConnect();
  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  if (type === "ARCHIVEPOST") {
    return (
      <Box sx={{ mb: 5 }}>
        <PostSkeleton mobileStatus={fetchMobileStatus()} />
      </Box>
    );
  } else {
    return (
      <Container sx={{ px: 0 }}>
        {type === "POST" && (
          <React.Fragment>
            <PostSkeleton isPost mobileStatus={fetchMobileStatus()} />
            <PostSkeletonExtras />
          </React.Fragment>
        )}
        {type === "PAGE" && <PostSkeleton mobileStatus={fetchMobileStatus()} />}
        {type === "ARCHIVE" && (
          <Stack direction="column" spacing={5}>
            <PostSkeleton mobileStatus={fetchMobileStatus()} />
            <PostSkeleton mobileStatus={fetchMobileStatus()} />
            <PostSkeleton mobileStatus={fetchMobileStatus()} />
            <PostSkeleton mobileStatus={fetchMobileStatus()} />
            <PostSkeleton mobileStatus={fetchMobileStatus()} />
          </Stack>
        )}
      </Container>
    );
  }
};

export default connect(Loading);
