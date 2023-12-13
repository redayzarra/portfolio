import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Container = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-transparent mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
