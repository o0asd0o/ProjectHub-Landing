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
    <CardFooter className="mt-auto flex gap-3 md:gap-4 items-center p-4 md:p-6">
      <Avatar className="h-8 w-8 md:h-10 md:w-10">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.slice(0, 1).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-bold text-sm md:text-base">{name}</span>
        <span className="text-xs md:text-sm text-[#474747]">{position}</span>
      </div>
    </CardFooter>
  );
};

export default FeedbackFooter;
