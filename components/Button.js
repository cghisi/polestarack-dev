import React from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Image from 'next/image'

export const Button = ({ primary, color, size, label, url, width, height, ...props }) => {
    const mode = primary
        ? "flex gap-2"
        : "flex gap-2";

    if (url) {
        return (
            <PrismicLink field={url} className={[`btn--${size}`, mode].join(" ")}>
                <span><PrismicText field={label} /></span>
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