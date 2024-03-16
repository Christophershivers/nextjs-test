import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-screen-md " opts={{align: "center"}}>
      <CarouselContent className="">
        {Array.from({ length: 16 }).map((_, index) => (
          <CarouselItem key={index} className=" lg:basis-1/4 md:basis-1/2">
            <div className="p-1 scale-90 transition-transform duration-300 hover:scale-100">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
