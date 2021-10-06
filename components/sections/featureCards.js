import SbEditable from "storyblok-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardAction = ({ card }) => (
  <div className="flex">
    <Link href={card.link["cached_url"]} passHref>
      <a className="text-indigo-500 inline-flex items-center mt-3">{card.action || "Learn More"}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </Link>
  </div>
);

const FeatureCards = ({ blok }) => {
  const imagePlaceholder = "https://dummyimage.com/720x400";
  return (
    <SbEditable content={blok}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h2 className="title-font font-medium text-3xl text-gray-900">{blok.title}</h2>
          <p className="text-2xl leading-relaxed mt-4 mb-6">{blok.text}</p>
          <div className="flex flex-wrap -m-4">
            {blok.cards.map(card => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={card._uid}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="h-40 w-full mb-4 relative">
                    <Image
                      className="rounded object-cover object-center"
                      alt="thumb"
                      src={card.image?.filename ? card.image.filename : imagePlaceholder}
                      layout="fill"
                    />
                  </div>
                  <h3 className="text-lg text-gray-900 font-medium title-font mb-4">{card.title}</h3>
                  <p className="leading-relaxed text-base">{card.text}</p>
                  {card.link?.["cached_url"] && <CardAction card={card} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default FeatureCards;