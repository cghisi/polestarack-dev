import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export const Button = ({ style, label, url, width, height }) => {
  if (url) {
    return (
      <PrismicLink
        field={url}
        className={
          style == "Secondary"
            ? "flex gap-2 border-2 border-black bg-black text-white py-4 px-5 hover:bg-gray font-medium w-full"
            : ""
        }
      >
        <span className="flex gap-2">
          <PrismicRichText
            field={label}
            components={{
              heading3: ({ children }) => (
                <span className="text-2xl">{children}</span>
              ),
              paragraph: ({ children }) => <span>{children}</span>,
            }}
          />
          <Image
            src="/arrow.svg"
            alt="Picture of the author"
            width={width}
            height={height}
          />
        </span>
      </PrismicLink>
    );
  }
};
