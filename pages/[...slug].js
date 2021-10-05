import React from "react";
import DynamicComponent from "@/components/dynamicComponent";
import Head from "next/head";
import Storyblok, { useStoryblok } from "@/lib/storyblok";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Header from "@/components/header";

export default function Page({ story, global, preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in preview mode
  story = useStoryblok(story, enableBridge);

  return (
    <Layout preview={preview}>
      <Head>
        <title>BPL Website</title>
      </Head>
      <Container>
        <Header blok={global.content}/>
        <DynamicComponent blok={story.content} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // join the slug array used in Next.js catch-all routes
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    // change to `published` to load the published version
    version: "published", // or 'draft'
  };

  if (preview) {
    // set the version to draft in the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data: storyData } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  let { data: globalData } = await Storyblok.get(`cdn/stories/global`, sbParams);

  return {
    props: {
      story: storyData ? storyData.story : null,
      global: globalData ? globalData.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  // get all links from Storyblok
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  // create a routes for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders or the home (index) page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    // creates all the routes
    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
