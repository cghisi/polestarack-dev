import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

import Layout from "../components/Layout";

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
  // return <SliceZone slices={page.data.slices} components={components} />;
  //<SliceZone slices={page.data.slices} components={components} />
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  const navigation = await client.getByUID('navigation','main_navigation')

  return {
    props: {
      page,
      navigation,
    },
  };
}
