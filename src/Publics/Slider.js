import React from "react";
import Carousel from "better-react-carousel";
import Korea from "../asset/Korea.jpg";

export default function Slider() {
  return (
    <>
      <h3></h3>
      <Carousel
        cols={3}
        rows={1}
        gap={3}
        showDots={true}
        loop={true}
        hideArrow={true}
        dotColorActive="#0060C2"
        scrollSnap={true}
      >
        <Carousel.Item>
          <img src={Korea} className="d-block mx-auto" alt="Korea" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Korea} className="d-block mx-auto" alt="Korea" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Korea} className="d-block mx-auto" alt="Korea" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Korea} className="d-block mx-auto" alt="Korea" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
