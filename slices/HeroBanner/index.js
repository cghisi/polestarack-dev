import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Button } from "../../components/Button";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */
const HeroBanner = ({ slice }) => (
  <section className="relative flex items-center h-screen mb-20 overflow-hidden">
    <div className="container mx-auto px-5 flex flex-col items-start z-20 text-white">
      {slice.primary.title ? (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="md:text-3xl text-3xl py-5 md:mr-5 font-medium">
                {children}
              </h1>
            ),
          }}
        />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      {slice.primary.cta_link ? (
        <Button
          style="Primary"
          label={slice.primary.cta_label}
          url={slice.primary.cta_link}
          height="16px"
          width="16px"
        />
      ) : (
        <a>Template slice, update me!</a>
      )}
      <div className="absolute bottom-20 md:flex gap-10">
        {slice.items.map((item, i) => {
          return (
            <Button
              style="Primary"
              label={item.label}
              url={item.url}
              height="20px"
              width="20px"
              key={i}
            />
          );
        })}
      </div>
    </div>
    {slice.primary.video.url ? (
      <video
        width="320"
        height="240"
        loop
        muted
        autoPlay
        playsinline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={slice.primary.video.url} type="video/mp4" />
      </video>
    ) : (
      <div>Video Slice, update me</div>
    )}
  </section>
);

export default HeroBanner;
