import Head from "next/head";
import Storyblok, { useStoryblok } from "@/lib/storyblok";
import DynamicComponent from "@/components/dynamicComponent";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Header from "@/components/header";

export default function Home({ story, global, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  story = useStoryblok(story, enableBridge);
  return (
    <Layout preview={preview}>
      <Head>
        <title>BPL Website</title>
      </Head>
      <Container>
        <Header blok={global.content} />
        <DynamicComponent blok={story.content} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "published", // or 'draft'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let story = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  let global = await Storyblok.get(`cdn/stories/global`, sbParams);

  return {
    props: {
      story: story.data ? story.data.story : null,
      global: global.data ? global.data.story : null,
      preview,
    },
    revalidate: 3600,
  };
}
