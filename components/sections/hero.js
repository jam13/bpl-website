import React from "react";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/components/placeholder";
import SbEditable from "storyblok-react";

const HeroImage = ({ blok }) => {
  const height = blok.image_height || 200;
  const imagePlaceholder = "https://dummyimage.com/720x600";
  return (
    <div className="w-full relative" style={{ height: `${height}px` }}>
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={blok.image?.filename ? blok.image.filename : imagePlaceholder}
        layout="fill"
      />
    </div>
  );
};

const HeroAction = ({ blok }) => (
  <div className="flex justify-center">
    <Link href={blok.link["cached_url"]} passHref>
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        {blok.action || "Go"}
      </button>
    </Link>
  </div>
);

const HeroText = ({ blok }) => (
  <>
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {blok.title}
    </h1>
    {blok.text && <p className="mb-8 leading-relaxed">{blok.text}</p>}
    {blok.link?.["cached_url"] && <HeroAction blok={blok} />}
  </>
);

const HeroWrapper = ({ children }) => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      {children}
    </div>
  </section>
);

const Hero = ({ blok }) => {
  const { layout } = blok;

  if (layout === "right") {
    return (
      <SbEditable content={blok}>
        <HeroWrapper>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <HeroImage blok={blok} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <HeroText blok={blok} />
          </div>
        </HeroWrapper>
      </SbEditable>
    );
  }

  if (layout === "left") {
    return (
      <SbEditable content={blok}>
        <HeroWrapper>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <HeroText blok={blok} />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <HeroImage blok={blok} />
          </div>
        </HeroWrapper>
      </SbEditable>
    );
  }

  return (
    <SbEditable content={blok}>
      <Placeholder />
    </SbEditable>
  );
}

export default Hero;
