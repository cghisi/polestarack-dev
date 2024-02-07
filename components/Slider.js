import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export const Slider = ({ items, ...props }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" />
      </div>
      <div className="keen-slider__slide">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" />
      </div>
      <div className="keen-slider__slide">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" />
      </div>
    </div>
  );
};
