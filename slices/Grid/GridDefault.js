import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "../../components/Button";

const GridDefault = ({ slice }) => {
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
      <div className="flex flex-col md:flex-row gap-x-5 pt-2">
        {slice.items.map((item, i) => {
          let gridValue = "";
          switch (item.size) {
            case "1/3":
              gridValue = "md:w-1/3 md:mb-5";
              break;
            case "2/3":
              gridValue = "md:w-2/3 md:mb-5";
              break;
            default:
              gridValue = "md:w-1/2 md:mb-5";
          }

          return (
            <div
              key={i}
              className={gridValue}
              style={{ backgroundColor: item.background_color }}
            >
              {item.image ? (
                <PrismicNextImage
                  field={item.image}
                  layout="responsive"
                  alt={item.image.alt}
                />
              ) : (
                ""
              )}
              <div className="mt-2 px-5">
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
              <div className="px-5">
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
    </section>
  );
};

export default GridDefault;
