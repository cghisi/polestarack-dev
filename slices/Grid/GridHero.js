import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "../../components/Button";

const GridHero = ({ slice }) => {
  return (
    <section className="container mx-auto md:my-10 my-10">
      {slice.primary.title ? (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="px-5 text-3xl mb-5">{children}</h1>
            ),
          }}
        />
      ) : (
        <h1>Template slice, update me!</h1>
      )}

      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}

      <div className="flex overflow-x-scroll flex-row gap-x-5">
        {slice.items.map((item, i) => {
          let gridValue = "";
          switch (item.size) {
            case "1/3":
              gridValue = "md:w-1/3 w-full";
              break;
            case "2/3":
              gridValue = "md:w-2/3 w-full";
              break;
            default:
              gridValue = "";
          }

          return (
            <div
              key={i}
              className={"relative " + gridValue}
              style={{ backgroundColor: item.background_color }}
            >
              {item.image ? (
                <div>
                  <PrismicNextImage
                    field={item.image}
                    layout="responsive"
                    alt={item.image.alt}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="absolute top-0 left-0 mt-2 px-5">
                <PrismicRichText field={item.subtitle} />
                <PrismicRichText
                  field={item.title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="text-2xl mb-5 font-medium">{children}</h2>
                    ),
                  }}
                />
                <PrismicRichText field={item.description} />
              </div>
              <div className="absolute bottom-5 left-5">
                <Button
                  primary
                  label={item.cta_label}
                  url={item.cta_link}
                  height="20px"
                  width="20px"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap">
          {slice.items.map((item, i) => {
            return (
              <div key={i} className="w-1/2 inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                  {item.image ? (
                    <PrismicNextImage
                      field={item.image}
                      layout="responsive"
                      alt={item.image.alt}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridHero;
