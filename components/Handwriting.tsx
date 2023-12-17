import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Handwriting = () => {
  return (
    <Card className="w-[350px] bg-black text-white border-zinc-800">
      <CardHeader>
        <CardTitle>Number Recognition</CardTitle>
        <CardDescription>
          This is a classification model built using a convolutional neural
          network (CNN).
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default Handwriting;
