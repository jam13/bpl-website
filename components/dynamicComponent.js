import Hero from "@/components/sections/hero";
import Page from "@/components/page";
import Placeholder from "@/components/placeholder";
import Quote from "@/components/sections/quote";
import FeatureList from "@/components/sections/featureList";
import FeatureCards from "@/components/sections/featureCards";
import HeaderSection from "@/components/sections/headerSection";
import BannerImage from "@/components/sections/bannerImage";

const Components = {
  page: Page,
  hero: Hero,
  quote: Quote,
  feature_list: FeatureList,
  feature_cards: FeatureCards,
  header: HeaderSection,
  banner_image: BannerImage,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
