import Head from "next/head";
import Storyblok, { useStoryblok } from "@/lib/storyblok";
import DynamicComponent from "@/components/DynamicComponent";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Header from "@/components/header";

export default function Home({ story, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  story = useStoryblok(story, enableBridge);
  return (
    <Layout preview={preview}>
      <Head>
        <title>BPL Website</title>
      </Head>
      <Container>
        <Header />
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

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600,
  };
}
