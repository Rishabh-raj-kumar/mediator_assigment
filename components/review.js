"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const img_cont =["review_1.jpg","review_2.jpg","review_1.jpg","review_2.jpg","review_1.jpg"];

const Review = () => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <section className=" mt-14">
        <div className=" container flex flex-col items-center justify-center">
          <h1
            data-scroll
            data-scroll-speed="0.6"
            className=" text-2xl text-center font-playfair"
          >
            Don't Just Take Our Word for It: <br />
            <span className=" text-[40px]">Read the customer's Reviews!</span>
          </h1>
          <div className=" p-4 mt-8">
            <Carousel setApi={setApi} className="w-full max-w-lg">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex  gap-3 aspect-video items-center justify-center p-6">
                        <img src={`${img_cont[index]}`} className=" w-28" />
                        <div>
                          <h1 className=" px-4">
                            <q>
                              I do Online business through instagram. I haven't
                              really thought of marketing my product since cost
                              is just too high. Since the platform would assist
                              in marketing in a cheap rate by connecting to
                              micro influencer, It would be really helpful.{" "}
                            </q>
                          </h1>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
