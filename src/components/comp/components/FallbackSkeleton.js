import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const FallbackComp = ({ height = "70vh" }) => (
  <SkeletonTheme color="#fff" highlightColor="#eee">
    <Skeleton duration={1.5} height={height} />
  </SkeletonTheme>
);
