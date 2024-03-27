"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlide() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimony, index) => (
          <CarouselItem key={index}>
            <blockquote className="my-6 border-l-2 pl-6  italic text-muted-foreground">
              &quot;{testimony.quote}&quot;
            </blockquote>

            <span className="text-sm text-muted-foreground ">
              {testimony.title}
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
