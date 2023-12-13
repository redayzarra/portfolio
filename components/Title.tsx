import React from "react";

interface Props {
  heading: string;
  title: string;
}

const Title = ({ heading, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 mb-10">
      <p className="text-muted-foreground">{heading}</p>
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  );
};

export default Title;
