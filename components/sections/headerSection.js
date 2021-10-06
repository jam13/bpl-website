import SbEditable from "storyblok-react";
import React from "react";

const HeaderSection = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section className={`text-gray-600 body-font text-${blok.align}`}>
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-3/4 w-full mx-auto">
            <h2 className="title-font font-medium text-3xl text-gray-900">{blok.title}</h2>
            <p className="text-2xl leading-relaxed mt-4 mb-6">{blok.text}</p>
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default HeaderSection;