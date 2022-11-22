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

      <div className="flex flex-col md:flex-row gap-x-5" style={{backgroundColor: slice.primary.background_color}}>
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
              className={
                item.image.url !== undefined
                  ? "relative " + gridValue
                  : "relative h-64 md:h-auto " + gridValue
              }
              style={{
                backgroundColor: item.background_color,
                color: item.text_color,
              }}
            >
              {item.image.url !== undefined ? (
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
              <div
                className={
                  item.image.url !== undefined
                    ? "absolute top-0 left-0 mt-2 px-5 "
                    : "absolute top-0 left-0 mt-2 px-5 h-64 md:h-auto"
                }
              >
                <PrismicRichText field={item.subtitle} components={{
                    heading2: ({ children }) => (
                      <h2 className="text-2xl text-orange-400 my-5 font-medium">{children}</h2>
                    ),
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}/>
                <PrismicRichText
                  field={item.title}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="text-2xl mb-5 font-medium">{children}</h2>
                    ),
                  }}
                />
                <PrismicRichText
                  field={item.description}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="text-2xl mb-5 font-medium">{children}</h2>
                    ),
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}
                />
              </div>
              <div className="absolute bottom-5 left-5">
                <Button
                  style={item.cta_style == "Primary" ? "Primary" : "Secondary"}
                  color={item.cta_color}
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

export default GridHero;
