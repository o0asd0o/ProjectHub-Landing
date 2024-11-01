import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Star } from "lucide-react";
import FeedbackFooter from "./feedback-footer";

const FEEDBACKS = [
  {
    rate: 5,
    name: "Emily R",
    position: "CEO at Creativex",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    feedback:
      "ProjectHub has completely transformed our workflow. The intuitive esign and user-friendly interface make project managementa breeze. Highly recommended!",
  },
  {
    rate: 5,
    name: "James L",
    position: "CEO at No Fear Funnels",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704c",
    feedback:
      "The UI of ProjectHub is clean and efficient. it's incredivly easy to navigate and has significcantly improved our team's productivity. A game-changer for our projects",
  },
  {
    rate: 5,
    name: "Dave Foy",
    position: "CEO at Go For It",
    image: "https://i.pravatar.cc/150?u=a042581f4e29025704c",
    feedback:
      "ProjectHub is the perfect tool for manage our projects. The design is not only visually appealing but also highly functional. Our team loves it!",
  },
  {
    rate: 5,
    name: "Jane Xo",
    position: "CEO at Microsoft",
    image: "https://i.pravatar.cc/150?u=a042582f4e29026704c",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Sunt molestias tempore atque accusamus cumque nesciunt nemo nobis.",
  },
  {
    rate: 5,
    name: "John Doe",
    position: "CEO at Apple",
    image: "https://i.pravatar.cc/150?u=a042585f4e29026204c",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Sunt molestias tempore atque accusamus cumque nesciunt nemo nobis.",
  },
];

const Feedbacks: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mb-16">
      <h1 className="text-center text-[46px] font-bold py-10">
        What Our Customers Say
      </h1>
      <div className="w-full">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {FEEDBACKS.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
                style={{ height: 320 }}
              >
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardHeader>
                      <CardDescription className="flex gap-1.5">
                        {Array.from({ length: item.rate }).map((_, index) => (
                          <Star
                            key={index}
                            color="#f48c23"
                            size={22}
                            fill="#f48c23"
                          />
                        ))}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <p className="w-full text-lg max-w-[80%] text-gray-600">
                        {item.feedback}
                      </p>
                    </CardContent>
                    <FeedbackFooter
                      image={item.image}
                      name={item.name}
                      position={item.position}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Feedbacks;
