import React from "react";

import GridHero from "./GridHero";
import GridVideo from "./GridVideo";
import GridDefault from "./GridDefault";

/**
 * @typedef {import("@prismicio/client").Content.GridComponentSlice} GridComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridComponentSlice>} GridComponentProps
 * @param { GridComponentProps }
 */
const GridComponent = ({ slice }) => {
  switch (slice.variation) {
    case "gridHeroImage":
      return <GridHero slice={slice} />;
    case "gridWithVideo":
      return <GridVideo slice={slice} />;
    default:
      return <GridDefault slice={slice} />;
  }
};

export default GridComponent;
