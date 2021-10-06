import SbEditable from "storyblok-react";
import React from "react";

const FeatureList = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h2 className="title-font font-medium text-3xl text-gray-900">{blok.title}</h2>
          <p className="text-2xl leading-relaxed mt-4 mb-6">{blok.text}</p>
          <div className="flex flex-wrap -m-4">
            {blok.list.map(listItem => (
              <div key={listItem._uid}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{listItem.title}</h3>
                <p className="leading-relaxed text-base">{listItem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default FeatureList;