import React from "react";

interface SkeletonProps {
  className?: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

const Skeleton = ({
  className,
  width = 20,
  height = 20,
  rounded,
}: SkeletonProps) => {
  return (
    <div
      className={`skeleton bg-[#f2eded] w-${width} h-${height} ${
        rounded && "rounded-full"
      } ${className}`}
    ></div>
  );
};

export default Skeleton;
