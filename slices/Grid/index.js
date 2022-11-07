import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Button } from "../../components/Button";

/**
 * @typedef {import("@prismicio/client").Content.GridComponentSlice} GridComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridComponentSlice>} GridComponentProps
 * @param { GridComponentProps }
 */
const GridComponent = ({ slice }) => {

  return (
    <section className="container mx-auto my-20">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} components={{
          heading1: ({ children }) => <h1 className="text-3xl mb-5">{children}</h1>,
        }} />
      ) : (
        <h1>Template slice, update me!</h1>
      )}

      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      <div className="flex flex-col md:flex-row gap-x-5 pt-2">
        {
          slice.items.map((item, i) => {
            let gridValue = '';
            switch (item.size) {
              case '1/3':
                gridValue = 'w-1/3';
                break;
              case '2/3':
                gridValue = 'w-2/3';
                break;
              default:
                gridValue = 'w-1/2';
            }

            return (<div key={i} className={(slice.variation === 'gridHeroImage') ? "relative flex flex-col " + gridValue : "flex flex-col " + gridValue}
              style={{ backgroundColor: item.background_color, }} >
              {item.image ? (
                <div>
                  <img src={item.image.url} alt={item.image.alt} />
                </div>
              ) : ""}
              {(slice.variation === 'gridWithVideo') && (item.video.url) ? (
                <video width="320" height="240" loop muted autoPlay className='w-auto min-w-full min-h-full max-w-none'>
                  <source src={item.video.url} type="video/mp4" />
                </video>
              ) : ""}
              <div className={(slice.variation === 'gridHeroImage') && (item.image.url) ? "absolute z-10 mt-2 px-5 w-5/12" : "h-full mt-2 px-5"}>
                <PrismicRichText field={item.subtitle} />
                <PrismicRichText field={item.title} components={{
                  heading2: ({ children }) => <h2 className="text-2xl mb-5">{children}</h2>,
                }} />
                <PrismicRichText field={item.description} />
              </div>
              <div className={(slice.variation === 'gridHeroImage') ? "absolute bottom-5 left-5" : "mt-2 px-5"}>
                <Button primary label={item.cta_label} url={item.cta_link} height="20px" width="20px" />
              </div>
            </div>);
          })
        }
      </div>
    </section>
  )
};

export default GridComponent;
