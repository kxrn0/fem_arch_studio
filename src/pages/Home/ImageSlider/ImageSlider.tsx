import { useState, MouseEvent } from "react";
import { ImageType } from "../../../types.ts";
import SCImageSlider from "./ImageSlider.styled.tsx";
import { Link } from "wouter";
import IconArrow from "../../../icons/IconArrow.tsx";

export type SliderImageType = {
  name: string;
  description: string;
  images: { desktop: ImageType; tablet: ImageType; mobile: ImageType };
};

type Props = {
  images: SliderImageType[];
};

export default function ImageSlider({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  function handle_click(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const index = Number(target.dataset.index);

    setCurrentImage(images[index]);
  }

  return (
    <SCImageSlider>
      <picture>
        <source
          srcSet={`${currentImage.images.desktop.src}`}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={`${currentImage.images.tablet.src}`}
          media="(min-width: 500px)"
        />
        <img src={currentImage.images.mobile.src} alt={currentImage.name} />
      </picture>
      <div className="information">
        <div className="details">
          <h2 className="fs-h2">{currentImage.name}</h2>
          <p className="fs-body-1">{currentImage.description}</p>
        </div>
        <Link to="/fem_arch_studio/portfolio" className="button-primary">
          <p>See Our Portfolio</p>
          <IconArrow />
        </Link>
      </div>
      <div className="buttons">
        {images.map((image, index) => (
          <button
            key={index}
            className={`button-tertiary ${
              currentImage.name === image.name && "selected"
            }`}
            data-index={index}
            onClick={handle_click}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </SCImageSlider>
  );
}
