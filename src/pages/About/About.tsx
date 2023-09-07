import SCAbout from "./About.styled.tsx";
import hero_desktop from "../../assets/about/desktop/image-hero.jpg";
import hero_tablet from "../../assets/about/tablet/image-hero.jpg";
import hero_mobile from "../../assets/about/mobile/image-hero.jpg";
import Hero, { HeroType } from "../../components/Hero/Hero.tsx";
import { useMemo } from "react";

export default function About() {
  const heroData: HeroType = useMemo(
    () => ({
      title: "About",
      name: "Your team of professionals",
      description:
        "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
      image: {
        desktop: { src: hero_desktop, breakPoint: 1300 },
        tablet: { src: hero_tablet, breakPoint: 700 },
        mobile: { src: hero_mobile, breakPoint: 500 },
      },
    }),
    []
  );

  return (
    <SCAbout>
      <Hero {...heroData} />
    </SCAbout>
  );
}
