import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/MyComponents/Earth"), {
  ssr: false,
});

const EarthFrame = () => {
  return (
    <Card className="w-[350px] dark border-zinc-800">
      <CardHeader className="space-y-2">
        <CardTitle>Explore Earth</CardTitle>
        <p className="text-muted-foreground text-sm">
          Made using Three.js, try moving it around!
        </p>
      </CardHeader>
      <CardContent className="h-80 -p-1 pb-2">
        <Earth />
      </CardContent>
    </Card>
  );
};

export default EarthFrame;
