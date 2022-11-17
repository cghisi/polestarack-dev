import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Image from 'next/image'

export const Button = ({ primary, color, size, label, url, width, height, ...props }) => {
    const mode = primary
        ? ""
        : "flex gap-2 border-2 border-black bg-black text-white py-4 px-5 hover:bg-white hover:text-black font-medium w-1/2";
 
        if (url) {
        return (
            <PrismicLink field={url} className={mode}>
                <span className="flex gap-2">
                <PrismicRichText field={label} components={{
                    heading3: ({ children }) => <span className="text-2xl">{children}</span>,
                    paragraph: ({ children }) => <span>{children}</span>,
                }} />
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