import { ResponsiveImageType } from "../../types.ts";
import SCHero from "./Hero.styled.tsx";

export type HeroType = {
  title: string;
  name: string;
  description: string;
  image: ResponsiveImageType;
};

export default function Hero({ title, name, description, image }: HeroType) {
  return (
    <SCHero>
      <picture>
        <source
          srcSet={image.desktop.src}
          media={`(min-width: ${image.desktop.breakPoint}px)`}
        />
        <source
          srcSet={image.tablet.src}
          media={`(min-width: ${image.tablet.breakPoint}px)`}
        />
        <img src={image.mobile.src} alt={name} />
      </picture>
      <div className="screen"></div>
      <div className="rest">
        <h1 className="fs-h1 scaled">{title}</h1>
        <div className="info">
          <h3 className="fs-h3">{name}</h3>
          <p className="fs-body-1">{description}</p>
        </div>
      </div>
    </SCHero>
  );
}
