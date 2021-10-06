import SbEditable from "storyblok-react";
import React from "react";
import Image from "next/image";

const BannerImage = ({ blok }) => {
  const imagePlaceholder = "https://dummyimage.com/720x600";
  return (
    <SbEditable content={blok}>
      <section className="text-gray-600 body-font">
        <div className="h-60 w-full relative">
          <Image
            className="object-cover object-center"
            alt="thumb"
            src={blok.image?.filename ? blok.image.filename : imagePlaceholder}
            layout="fill"
          />
        </div>
      </section>
    </SbEditable>
  );
};

export default BannerImage;