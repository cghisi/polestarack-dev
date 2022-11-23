import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Image from "next/image";

export const Button = ({ style, color, label, url, width, height }) => {
  if (url) {
    let mode = "";

    {
      style == "Secondary"
        ? (mode =
            "flex gap-2 border-2 border-black text-white py-4 px-5 hover:bg-gray font-medium w-full")
        : (mode = "");
    }

    let linkStyle = "";

    {
      style == "Secondary"
        ? (linkStyle = "color: " + color + ";")
        : (linkStyle = "");
    }

    console.log(linkStyle);

    return (
      <PrismicLink
        field={url}
        className={mode}
        style={{ backgroundColor: color }}
      >
        <span className="flex gap-2">
          <PrismicRichText
            field={label}
            components={{
              heading3: ({ children }) => (
                <span className="text-2xl">{children}</span>
              ),
              paragraph: ({ children }) => (
                <span
                  className={style == "Secondary" ? "invert" : ""}
                  style={style == "Secondary" ? { color: color } : {}}
                >
                  {children}
                </span>
              ),
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
