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
    <section className="container mx-auto py-5">
      {slice.primary.title ? (
        <span className="title">
          <PrismicRichText field={slice.primary.title} />
        </span>
      ) : (
        <h2>Template slice, update me!</h2>
      )}

      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      <div className="flex flex-col md:flex-row gap-x-5">
        {
          slice.items.map((item, i) =>
            <div key={i} className={(item.size) ? "flex flex-col w-" + (item.size) : "flex flex-col w-1/2"}
              style={{ backgroundColor: item.background_color, }} >
              {item.image.url ? (
                <div>
                  <img src={item.image.url} alt={item.image.alt} />
                </div>
              ) : ""}
              <div className={(slice.variation === 'gridHeroImage') && (item.image.url) ? "absolute z-10 mt-2 px-5" : "mt-2 px-5"}>
                <PrismicRichText field={item.title} components={{
              heading2: ({ children }) => <h2 className="text-2xl ">{children}</h2>,
            }}/>
                <PrismicRichText field={item.description} />
                <Button primary label={item.cta_label} url={item.cta_link} height="22px" width="22px" />
              </div>

            </div>
          )
        }
      </div>
    </section>
  )
};

export default GridComponent;
