"use client";

import React from "react";
import { CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  image: string;
  name: string;
  position: string;
};
const FeedbackFooter: React.FC<Props> = ({ image, name, position }) => {
  return (
    <CardFooter className="mt-auto flex gap-4 items-center">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.slice(0, 1).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="text-sm text-[#474747]">{position}</span>
      </div>
    </CardFooter>
  );
};

export default FeedbackFooter;
