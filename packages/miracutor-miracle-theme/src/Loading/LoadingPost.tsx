import React from "react";
import PostSkeleton from "./PostSkeleton";
import PostSkeletonExtras from "./PostSkeletonExtras";

const LoadingPost = () => {
  return (
    <>
      <PostSkeleton isPost />
      <PostSkeletonExtras />
    </>
  );
};

export default React.memo(LoadingPost);
