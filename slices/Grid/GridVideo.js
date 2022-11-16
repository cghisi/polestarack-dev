import React from "react";
import { PrismicRichText } from "@prismicio/react";
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
      <div className="flex flex-col md:flex-row  gap-5">
        {slice.items.map((item, i) => {
          let gridValue = "";
          switch (item.size) {
            case "1/3":
              gridValue = "md:w-1/3";
              break;
            case "2/3":
              gridValue = "md:w-2/3";
              break;
            default:
              gridValue = "md:w-1/2";
          }

          return (
            <div key={i} className={"relative " + gridValue}>
              {item.video.url ? (
                <video
                  width="320"
                  height="240"
                  loop
                  muted
                  autoPlay
                  className="min-w-full min-h-full max-w-none"
                >
                  <source src={item.video.url} type="video/mp4" />
                </video>
              ) : (
                ""
              )}
              <div className="my-10 px-5">
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
