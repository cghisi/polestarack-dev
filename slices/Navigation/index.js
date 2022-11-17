import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.NavigationSlice} NavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationSlice>} NavigationProps
 * @param { NavigationProps }
 */
const Navigation = ({ slice }) => (
  <section>
    <ul>
    {slice.items.map((item, i) => {
      <li>{item.link_label}</li>
    })}
    </ul>
  </section>
)

export default Navigation