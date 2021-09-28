import Hero from "@/components/hero";
import Page from "@/components/page";
import Placeholder from "@/components/placeholder";

const Components = {
  hero: Hero,
  page: Page,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
