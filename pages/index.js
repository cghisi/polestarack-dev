import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

import { Slider } from "../components/Slider";
import { AnimatedScroll } from "../components/AnimatedScroll";

const Page = ({ page, navigation, settings }) => {
  //return <SliceZone slices={page.data.slices} components={components} />;
  //<SliceZone slices={page.data.slices} components={components} />
  return (
    <>
      <div>test</div>
      <AnimatedScroll />
    </>
  );
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
