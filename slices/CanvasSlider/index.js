import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { AnimatedScroll } from '../../components/AnimatedScroll'

/**
 * @typedef {import("@prismicio/client").Content.CanvasSliderSlice} CanvasSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CanvasSliderSlice>} CanvasSliderProps
 * @param { CanvasSliderProps }
 */
const CanvasSlider = ({ slice }) => (
  <section className='container mx-auto'>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <AnimatedScroll/>
  </section>
)

export default CanvasSlider