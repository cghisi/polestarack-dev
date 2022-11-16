import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "../../components/Button";

const GridVideo = ({ slice }) => {
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
      <div className="grid grid-flow-col gap-4">
        {slice.items.map((item, i) => {
          let gridValue = "";
          switch (item.size) {
            case "1/3":
              gridValue = "";
              break;
            case "2/3":
              gridValue = "col-span-2";
              break;
            default:
              gridValue = "";
          }

          return (
            <div key={i} className={"relative " + gridValue}>
              {item.video.url ? (
                <video width="320" height="240" loop muted autoPlay>
                  <source src={item.video.url} type="video/mp4" />
                </video>
              ) : (
                ""
              )}
              <div className="h-full mt-2 px-5">
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

export default GridVideo;
