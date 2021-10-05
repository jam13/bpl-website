import SbEditable from "storyblok-react";
import React from "react";

const Section = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section className="text-gray-600 body-font">
        <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">{blok.title}</h2>
        <p>{blok.body}</p>
      </section>
    </SbEditable>
  );
};

export default Section;