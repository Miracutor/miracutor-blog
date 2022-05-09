import React from "react";
import Container from "@mui/material/Container";
import PostSkeleton from "./PostSkeleton";
import LoadingArchive from "./LoadingArchive";
import LoadingPost from "./LoadingPost";

type LoadingProps = {
  when?: boolean;
  type: "POST" | "PAGE" | "ARCHIVE" | "ARCHIVEPOST";
};

const Loading = ({ type = "POST" }: LoadingProps) => {
  if (type === "ARCHIVEPOST") {
    return <PostSkeleton isArchive />;
  } else {
    return (
      <Container sx={{ px: 0 }}>
        {type === "POST" && <LoadingPost />}
        {type === "PAGE" && <PostSkeleton />}
        {type === "ARCHIVE" && <LoadingArchive />}
      </Container>
    );
  }
};

export default React.memo(Loading);
