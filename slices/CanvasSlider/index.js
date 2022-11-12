import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { AnimatedScroll } from '../../components/AnimatedScroll'
import AnimatedImage from '../../components/AnimatedImage'

/**
 * @typedef {import("@prismicio/client").Content.CanvasSliderSlice} CanvasSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CanvasSliderSlice>} CanvasSliderProps
 * @param { CanvasSliderProps }
 */
const CanvasSlider = ({ slice }) => {
  return (
    <section className='container mx-auto my-20'>
      <span className="title">
        {
          slice.primary.title ?
            <PrismicRichText field={slice.primary.title} />
            : <h2>Template slice, update me!</h2>
        }
      </span>
      {
        slice.primary.description ?
          <PrismicRichText field={slice.primary.description} />
          : <p>start by editing this slice from inside Slice Machine!</p>
      }

      <div className="hidden md:block">
        <AnimatedImage image_url={slice.primary.image_url} width="1900" height="1000" />
      </div>
      <div className="block md:hidden">
        <AnimatedImage image_url={slice.primary.mobile_image_url} width="1080" height="1080" />
      </div>

    </section>
  );
}

export default CanvasSlider