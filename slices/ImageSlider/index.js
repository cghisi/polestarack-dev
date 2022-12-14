import React from "react";
import { PrismicRichText } from "@prismicio/react";

//import { Slider } from "../../components/Slider";

/**
 * @typedef {import("@prismicio/client").Content.ImageSliderSlice} ImageSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSliderSlice>} ImageSliderProps
 * @param { ImageSliderProps }
 */
const ImageSlider = ({ slice }) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <Slider items={slice.items} />
  </section>
);

export default ImageSlider;
