import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */
const HeroBanner = ({ slice }) => (
  <section className="relative flex items-center h-screen mb-12 overflow-hidden">
    
    <div className="flex flex-col items-start z-30 px-10 text-white">
      {
        slice.primary.title ?
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => <h1 className="md:text-2xl text-3xl font-medium  md:mr-5">{children}</h1>,
            }}
          />
          : <h2>Template slice, update me!</h2>
      }
      {
        slice.primary.cta_link ?
        <a href="">test</a>
        : <a>Template slice, update me!</a>
      }
    </div>
    {
      slice.primary.video ?
        <video width="320" height="240" loop muted autoPlay className='absolute z-10 w-auto min-w-full min-h-full max-w-none'>
          <source src={slice.primary.video.url} type="video/mp4" />
        </video>
        : <div>Video Slice, update me</div>
    }
    {
      slice.primary.description ?
        <PrismicRichText field={slice.primary.description} />
        : <p>start by editing this slice from inside Slice Machine!</p>
    }
  </section>
)

export default HeroBanner