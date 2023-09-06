import { useState, MouseEvent, CSSProperties } from "react";
import { ResponsiveImageType } from "../../../types.ts";
import SCImageSlider from "./ImageSlider.styled.tsx";
import { Link } from "wouter";
import IconArrow from "../../../icons/IconArrow.tsx";

export type SliderImageType = {
  name: string;
  id: number;
  description: string;
  image: ResponsiveImageType;
};

type Props = {
  images: SliderImageType[];
  time?: number;
};

export default function ImageSlider({ images, time = 0.33 }: Props) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  function handle_click(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const id = Number(target.dataset.id);

    if (id === currentImage.id) return;

    const image = images.find((image) => image.id === id)!;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrentImage(image);
      return;
    }

    setIsExiting(true);
    setTimeout(() => {
      setCurrentImage(image);
      setIsExiting(false);
      setIsEntering(true);
    }, time * 1000);
  }

  return (
    <SCImageSlider style={{ "--time": `${time}s` } as CSSProperties}>
      <div className="picture-container">
        <picture>
          <source
            srcSet={currentImage.image.desktop.src}
            media={`(min-width: ${currentImage.image.desktop.breakPoint}px)`}
          />
          <source
            srcSet={currentImage.image.tablet.src}
            media={`(min-width: ${currentImage.image.tablet.breakPoint}px)`}
          />
          <img
            src={currentImage.image.mobile.src}
            alt={currentImage.name}
            className={`${isEntering && "entering"} ${isExiting && "exiting"}`}
          />
        </picture>
      </div>
      <div className="information">
        <div className="details">
          <h2
            className={`fs-h2 scaled ${isEntering && "entering"} ${
              isExiting && "exiting"
            }`}
          >
            {currentImage.name}
          </h2>
          <p
            className={`fs-body-1 ${isEntering && "entering"} ${
              isExiting && "exiting"
            }`}
          >
            {currentImage.description}
          </p>
        </div>
        <Link
          to="/fem_arch_studio/portfolio"
          className={`button-primary ${isEntering && "entering"} ${
            isExiting && "exiting"
          }`}
        >
          <p>See Our Portfolio</p>
          <IconArrow />
        </Link>
      </div>
      <div className="buttons">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`button-tertiary ${
              currentImage.id === image.id && "selected"
            }`}
            data-id={image.id}
            onClick={handle_click}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </SCImageSlider>
  );
}
