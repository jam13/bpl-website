import DynamicComponent from "@/components/dynamicComponent";
import SbEditable from "storyblok-react";

const Page = ({ blok }) => (
  <SbEditable content={blok}>
    <main>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  </SbEditable>
);

export default Page;
