import { useMemo } from "react";
import { Link } from "wouter";
import Hero, { HeroType } from "../../components/Hero/Hero.tsx";
import SCNotFound from "./NotFound.styled.tsx";
import hero_desktop from "../../assets/not_found/desktop/image_hero.jpg";
import hero_tablet from "../../assets/not_found/tablet/image_hero.jpg";
import hero_mobile from "../../assets/not_found/mobile/image_hero.jpg";
import IconArrow from "../../icons/IconArrow.tsx";

export default function NotFound() {
  const heroData: HeroType = useMemo(
    () => ({
      title: "404",
      name: "Page not found",
      description:
        "You aren't supposed to be here, do you wish to return home?",
      image: {
        desktop: { src: hero_desktop, breakPoint: 1300 },
        tablet: { src: hero_tablet, breakPoint: 700 },
        mobile: { src: hero_mobile, breakPoint: 500 },
      },
    }),
    []
  );

  return (
    <SCNotFound>
      <Hero {...heroData} />
      <Link to="/fem_arch_studio/" className="button-primary">
        <p>take me home</p>
        <IconArrow />
      </Link>
    </SCNotFound>
  );
}
