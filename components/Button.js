import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Image from 'next/image'

export const Button = ({ primary, color, size, label, url, width, height, ...props }) => {
    const mode = primary
        ? "flex gap-2"
        : "flex gap-2";
 
        if (url) {
        return (
            <PrismicLink field={url} className={mode}>
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
            </PrismicLink>
        );
    }
};